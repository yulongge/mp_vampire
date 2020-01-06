import OnError from './error';
import {initEnv, initConfig} from './config';
import initInterceptors from './interceptors';
import {
	hideLoading, 
	showLoading, 
	showToast
} from './tip';

const fly = initEnv();

initConfig(fly);
initInterceptors(fly);

function newParam(param) { //参数组合
	return {
		...param
	}
}

function request(url, param, callback, type) {
	showLoading();
	return fly.request(url, newParam(param), {
		method: type
	}).then(res => {
		hideLoading();
		OnError(res.data);
		if(callback)
			callback();
		if("result" in res.data) {
			return res.data.result;
		}
	}).catch(err => {
		hideLoading();
		console.error(err, `${type} request ${url} error`);
		showToast('error', 2000)
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