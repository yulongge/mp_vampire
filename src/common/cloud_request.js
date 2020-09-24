function getData(name, params, type) {
	uni.showLoading({
		title: '处理中...'
	})
	console.log(params, 'getData')
	return uniCloud.callFunction({
		name,
		data: {...params}
	}).then((res) => {
		console.log(res, 'getData ' + name)
		uni.hideLoading();
		const {data} = res.result;
		if(type == "list") return data;
		if(type == "update") return res.result.updated; //更新条数
		return data[0];
	})
}

export const getConfig = (params, callback)=> getData('config', params);
export const getHomeData = (params, callback) => getData('home', params);
export const getArticleData = (params, callback) => getData('article', params, 'list');
export const getInterviewData = (params, callback) => getData('interview', params, 'list');
export const getQuestionData = (params, callback) => getData('question', params, 'list');
export const getArticleCategory = (params, callback) => getData('article_category', params, 'list');
export const updateArticle = (params, callback) => getData('article_update', params, 'update');