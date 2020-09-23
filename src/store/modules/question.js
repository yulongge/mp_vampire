import {
	getQuestionData
} from '../../common/cloud_request.js';
import {
	getMarkdownData
} from '../../common/app_request.js';
const state = () => {
	return {
		questions: [],
		answer: ""
	}	
}
const getters = {
	questions: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.questions
	},
	answer: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.answer
	}
}

const actions = {
	getQuestions({state, commit}, params) {
		console.log(params, 'params')
		return getQuestionData({...params}).then(rst => {
			console.log(params, 'initQuestion')
			commit("initQuestion", rst)
		})
	},
	getAnswer({state, commit}, url) {
		return getMarkdownData(url, {}).then(rst => {
			console.log(rst, 'answer')
			commit("initAnswer", rst.data);
		})
	},
	closeAnswer({state, commit}) {
		commit("closeAnswer");
	}
}

const mutations = {
	initQuestion(state, data) {
		state.questions = data;
	},
	initAnswer(state, data) {
		state.answer = data;
	},
	closeAnswer(state, data) {
		state.answer = "";
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}