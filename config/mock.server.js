const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const walk = require('klaw-sync');
const { resolve, join, relative } = require('path');
const config = require('./mock.config.js');

//启动mock服务器
const runserver = (port, dir)=>{
	const app = new express;
	app.set('views', '../api');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(dir, {}));
	app.all('*', function(req, res, next) {  
	    res.header("Access-Control-Allow-Origin", `*`);
	    res.header("Access-Control-Allow-Credentials", true);
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
	    res.header("Content-Type", "application/json;charset=utf-8");  
	    next();  
	});
	const server = http.createServer(app);
	const api = walk(resolve(__dirname, '../api'))
		.map(p=>p.path)
		.filter(path=>/\.js$/.test(path))
		.forEach(part=>require(part)(app, config.mock_prefix));

	app.set('port', port);
	let host = config.mock_host(process);
	server.listen(port, host);
	server.on('listening', e=>console.log(`server run at ${config.mock_protocal}://${host}:${port} (${dir})`));
	
	
}

runserver(config.mock_port(process), './');

