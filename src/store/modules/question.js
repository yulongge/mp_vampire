import {
	getQuestionData
} from '../../common/cloud_request.js';
import {
	getMarkdownData
} from '../../common/app_request.js';
const state = () => {
	return {
		questions: []
	}	
}
const getters = {
	questions: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.questions
	}
}

const actions = {
	getQuestions({state, commit}, params) {
		console.log(params, 'params')
		
		getQuestionData({...params}).then(rst => {
			console.log(params, 'initQuestion')
			commit("initQuestion", rst)
		})
		
	}
}

const mutations = {
	initQuestion(state, data) {
		state.questions = data;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}