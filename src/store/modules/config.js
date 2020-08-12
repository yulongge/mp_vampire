import {
	getInitConfig
} from '../../common/app_request';

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
		getInitConfig({}).then(rst => {
			console.log(rst, 'srst')
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