import {
	getInterviewData
} from '../../common/cloud_request.js';
import {
	getMarkdownData
} from '../../common/app_request.js';
const state = () => {
	return {
		interviews: []
	}	
}
const getters = {
	interviews: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.interviews
	}
}

const actions = {
	getInterviews({state, commit}, config) {
		getInterviewData({}).then(rst => {
			console.log(rst, 'interview')
			commit("initInterview", rst)
		})
		
	}
}

const mutations = {
	initInterview(state, data) {
		state.interviews = data;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}