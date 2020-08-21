import {
	getHomeData
} from '../../common/cloud_request.js';

const state = () => {
	return {
		cards: [],
		homeBg: ""
	}	
}
const getters = {
	cards: (state, getters, rootState) => {
		console.log(state, 'state')
		return state.cards
	}
}

const actions = {
	getHome({state, commit}, config) {
		getHomeData({}).then(rst => {
			console.log(rst, 'srst')
			commit("initHome", rst)
		})
		
	}
}

const mutations = {
	initHome(state, data) {
		state.cards = data.cards;
		state.homeBg = data.bg;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}