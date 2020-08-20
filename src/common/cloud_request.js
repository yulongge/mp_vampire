function getData(name, params) {
	uni.showLoading({
		title: '处理中...'
	})
	return uniCloud.callFunction({
		name,
		data: params
	}).then((res) => {
		console.log(res, 'getData ' + name)
		uni.hideLoading();
		const {data} = res.result;
		return data[0];
	})
}

export const getConfig = (params, callback)=> getData('config', params);
export const getHomeData = (params, callback) => getData('home', params);