const fs = require('fs-extra');
const {watchTree} = require('watch');
const walk = require('klaw-sync');
const {resolve, relative} = require('path');
const less = require('less');
const config = require('./server.config.js');

const css2wxss = (path, cont)=>{
	//console.log(path, 'css2wxss');
	path = relative(__dirname, path);
	const wxss = relative(__dirname, 
		path.replace(/^css\W/, 'public/').replace(/\.less$/, '.wxss')
	);
	//console.log(wxss, 'wxss');
	if (fs.existsSync(wxss)) {
		cont = cont.replace(/\W\*wxss\={2}\s(.*?)\s\={2}wxss\*\W/g, "$1;\r\n");
		fs.unlinkSync(wxss);
		fs.writeFileSync(wxss, `/*由 ${path} 生成，请勿手动修改以免被覆盖！*/\r\n${cont}`, {mode: 0o777});
		console.log(wxss, 'saved!');
	}
};

const parseLess = path => {
	const lessCont = fs.readFileSync(path, 'utf8').replace(
    	/(\@import\s.*?\.wxss[\'|\"])(?:\s+)?\;/g, 
    	"/*wxss== $1 ==wxss*/"
    );

	//console.log('parseLess coming...', path);
    return less.render(lessCont, {paths: ['./css']})
    	.then(output=>output.css)
    	//.then(parseFont)
    	//.then(parseImg)
    	.then(cont=>css2wxss(path, cont));
	
};

const parseAllLess = ()=>{
	const lessFiles = walk(
		resolve(__dirname, "css"),  {
			nodir: true
		}).map(p=>p.path)
		//.filter(path=>/\.less$/.test(path))
		//.filter(path=>/\Wless\W(?!\_)/.test(path));
	//console.log(lessFiles, 'lessFiles');
	return Promise.all(lessFiles.map(parseLess))
		.then(()=>console.log('👌  所有less已处理完毕!'));
};

function isLess(f, stat) {
	console.log(/\.less$/.test(f), 'filter')
	return /\.less$/.test(f);
}

watchTree('./css', function(f, curr, prev) {
	if (typeof f == 'object' && prev === null && curr === null) { 
		Object.keys(f).forEach(function(name) {
			if (/\_.*?\.less$/.test(name)) {
				console.log(name, 'filter coming....')
				parseAllLess();
				return;
			}
		});
	} else {
		if (/\.less$/.test(f)) {
			parseLess(f);
			return;
		}
	}
	
})
