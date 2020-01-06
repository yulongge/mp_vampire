const nodeFileEval = require('node-file-eval');
const fs = require('fs-extra');
const { resolve } = require('path');


function mock_port(process) {
	const { original } = JSON.parse(process.env.npm_config_argv);
	if(original[1]) {
		if((/^reset$/).test(original[1])) {
			if(original[3]) {
				const env = original[3].substr(6);
				if(env.length <=0) return "";
			}
			
		}
	}
	return "9090"
}

nodeFileEval(__dirname + '/mock.config.js').then(dcfg=>{
	const apiConfigPath = resolve(__dirname, './api.config.js');
	const cfg = {
		mock_host: dcfg.mock_host(process),
		mock_port: mock_port(process),
		mock_prefix: dcfg.mock_prefix,
		mock_protocal: dcfg.mock_protocal
	};
	const cont = 'module.exports = ' + JSON.stringify(cfg, null, 2);
	fs.writeFileSync(apiConfigPath, `/*由 ${apiConfigPath} 生成，请勿手动修改以免被覆盖！*/\r\n${cont}`);
});