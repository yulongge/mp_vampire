const {server_prefix} = require('../app.config');
const {request} = require('./request');

// 初始化配置
const initApp = (app, paramsWithCode, callback) => request(
	'GET', `${server_prefix}`,
	paramsWithCode,
	callback
);

//工具列表
const getTools = (data, callback) => request(
	'GET',
	`${server_prefix}/tools`,
	{data},
	callback
);


module.exports = {
	initApp,
	getTools
}
