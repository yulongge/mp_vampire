import OnError from './request/error';
const config = require('../../../config/api.config.js');
const {mock_protocal, mock_host, mock_port, mock_prefix} = config;
const baseURL = `${mock_protocal}://${mock_host}:${mock_port}/${mock_prefix}`;
function showLoading() {
	uni.showLoading({
        title: 'loading'
    })
}

function hideLoading() {
	uni.hideLoading();
}

function newParam(param) { //参数组合
	return {
		...param
	}
}

function request(url, param, callback, type) {
	showLoading();
	return	uni.request({
				url: baseURL + url,
				data: newParam(param),
				header: {},
			}).then(res => { //res为一个数组，数组第一项为错误信息，第二项为返回数据
				hideLoading();
				OnError(res[1].data);
				if(callback)
					callback();
				if("result" in res[1].data) {
					return res[1].data.result;
				}
			}).catch(err => {
				hideLoading();
				wx.showToast({
					title: 'error',
					icon: 'none',
					duration: 2000
				})
				throw err;
			})
}

function get(url, param, callback) { //get方式
	return request(url, param, callback, 'get');
}

function post(url, param, callback) { //post方式
	return request(url, param, callback, 'post');
}

export default {
    request,
    get,
    post
}