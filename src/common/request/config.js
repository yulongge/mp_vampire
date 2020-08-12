const config = require('../../../config/api.config.js');
const {
	mock_protocal, 
	mock_host, 
	mock_port, 
	mock_prefix
} = config;

export function initEnv() {
	const PLATFORM = process.env.VUE_APP_PLATFORM;
	let Fly = require('flyio/dist/npm/fly');
	switch(PLATFORM) {
		case 'h5':
			Fly = require('flyio/dist/npm/fly');
			break;
		case 'mp-weixin':
			Fly = require('flyio/dist/npm/wx');
			break;
		case 'mp-alipay':
			Fly = require('flyio/dist/npm/ap');
			break;
		default:
			Fly = require('flyio/dist/npm/ap');
			break;
	}
	return new Fly;
}

export function initConfig(fly) {
	const baseConfig = {
		baseURL: `${mock_protocal}://${mock_host}:${mock_port}/${mock_prefix}`
	}

	fly.config = {
		...fly.config,
		...baseConfig
	};
}