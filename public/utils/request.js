const { server_host, server_port, server_protocal } = require('../app.config.js');
const { show_loading, hide_loading } = require('./wxapi');

const _request = (method, url, data, success, onfail=null) => {
	show_loading();
	const reqData = {};
	wx.request({
		url: `${server_protocal}://${server_host}:${server_port}${url}`,
		data: reqData,
		method: method.toUpperCase(),
		header: {},
		success(res) {
			//console.log(res, success, 'success');
			const data = res.data;
			if (typeof success === 'function') {
				success(data.result);
			}
		},
		fail(res) {
		
		},
		complete(res) {
			hide_loading();
		}
	})
}

module.exports = {
	request: _request
}
