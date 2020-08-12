const timeout = 10000; //超时时间

function initInterceptors(fly) {
	fly.interceptors.request.use((config, promise)=>{
		//给所有请求添加自定义header
		//config.headers["X-Tag"]="flyio";
		config.timeout = 10000;
		return config;
	})
}

export default initInterceptors;