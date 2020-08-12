const os = require('os');
const { resolve } = require('path');

function getHost(process) {
	let _host = 'localhost'; 
	if (!process)
		return _host;
	
	const { original } = JSON.parse(process.env.npm_config_argv);
	let ip_param;
	
	if (original[0] === 'run' && /^(mock|reset)$/.test(original[1])) {
		ip_param = original[2];
	} else if (original[0] === 'start') {
		ip_param = original[1];
	} else {
		return _host;
	}
	

	if (!/^\-ip\=.+$/.test(ip_param))
		return _host;

	if (ip_param === '-ip=1') {
		try {
			let interfaces = os.networkInterfaces();
			let addresses = [];
			for (let k in interfaces) {
			    for (let k2 in interfaces[k]) {
			        let address = interfaces[k][k2];
			        if (address.family === 'IPv4' && !address.internal) {
			            addresses.push(address.address);
			        }
			    }
			}

			_host = addresses[0];
		} catch(ex) {
			console.log(ex);
		}
	} else {
		_host = ip_param.substr(4);
	}

	return _host;
}

function mock_port(process) {
	const { original } = JSON.parse(process.env.npm_config_argv);
	if(original[1]) {
		if((/^mock$/).test(original[1])) {
			if(original[3]) {
				const env = original[3].substr(6);
				if(env) return env;
			}
			
		}
	}
	return "9090"
}
module.exports =  {
	"mock_host": getHost,
	"mock_port": mock_port,
	"mock_prefix": "vampire",
	"mock_protocal": "http"
}