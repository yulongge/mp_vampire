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

//文章列表
const getArticle = (data, callback) => request(
	'GET',
	`${server_prefix}/article`,
	{data},
	callback
);

//文章详情
const getArticleDetail = (data, callback) => request(
	'GET',
	`${server_prefix}/article/${data.id}`,
	{data},
	callback
);


module.exports = {
	initApp,
	getTools,
	getArticle,
	getArticleDetail
}
