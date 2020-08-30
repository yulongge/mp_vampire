import {
	getArticleData
} from '../../common/cloud_request.js';
import {
	getMarkdownData
} from '../../common/app_request.js';
const state = () => {
	return {
		articles: [],
		articleDetail: ""
	}	
}
const getters = {
	articles: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.articles
	},
	articleDetail: (state, getters, rootState) => {
		return state.articleDetail
	}
}

const actions = {
	getArticles({state, commit}, config) {
		getArticleData({}).then(rst => {
			console.log(rst, 'article')
			commit("initArticle", rst)
		})
		
	},
	getMarkdown({state, commit}, url) {
		getMarkdownData(url, {}).then(rst => {
			console.log(rst, 'article detail')
			commit("initArticleDetail", rst.data);
		})
	}
}

const mutations = {
	initArticle(state, data) {
		state.articles = data;
	},
	initArticleDetail(state, data) {
		state.articleDetail = data;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}