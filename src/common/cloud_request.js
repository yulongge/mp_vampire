function getData(name, params, type) {
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
		if(type == "list") return data;
		return data[0];
	})
}

export const getConfig = (params, callback)=> getData('config', params);
export const getHomeData = (params, callback) => getData('home', params);
export const getArticleData = (params, callback) => getData('article', params, 'list');