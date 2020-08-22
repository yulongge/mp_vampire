import {
	getConfig
} from '../../common/cloud_request.js';

const state = () => {
	return {
		config: {}
	}	
}
const getters = {
	config: (state, getters, rootState) => {
		console.log(state, 'state')
		return {
			title: state.config.title
		}
	}
}

const actions = {
	getConfig({state, commit}, config) {
		getConfig({}).then(rst => {
			commit("initConfig", rst)
		})
		
	}
}

const mutations = {
	initConfig(state, config) {
		state.config = config;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}