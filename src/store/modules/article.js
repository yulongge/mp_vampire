import {
	getArticleData,
	getArticleCategory,
	updateArticle
} from '../../common/cloud_request.js';
import {
	getMarkdownData
} from '../../common/app_request.js';
const state = () => {
	return {
		articles: [],
		articleDetail: "",
		category: [],
	}	
}
const getters = {
	articles: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.articles
	},
	articleDetail: (state, getters, rootState) => {
		return state.articleDetail
	},
	category: (state, getters, rootState) => {
		return state.category
	}
}

const actions = {
	getArticles({state, commit}, config) {
		let param = {};
		if(config && config.type) {
			param.type = config.type;
		}
		if(config && config.limit) {
			param.limit = config.limit;
		}
		return getArticleData({...param}).then(rst => {
			console.log(rst, 'article')
			commit("initArticle", rst)
		})
		
	},
	getMarkdown({state, commit}, url) {
		return getMarkdownData(url, {}).then(rst => {
			console.log(rst, 'article detail')
			commit("initArticleDetail", rst.data);
		})
	},
	getCategory({state, commit}) {
		return getArticleCategory({}).then(rst => {
			console.log(rst, 'getArticleCategory')
			commit("initCategory", rst);
		})
	},
	updateArticle({state, commit}, item) {
		return updateArticle(item).then(rst => {
			console.log(rst, 'updateArticle')
		})
	}
}

const mutations = {
	initArticle(state, data) {
		state.articles = data;
	},
	initArticleDetail(state, data) {
		state.articleDetail = data;
	},
	initCategory(state, data) {
		state.category = data;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}