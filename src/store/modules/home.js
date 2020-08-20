import {
	getHomeData
} from '../../common/cloud_request.js';

const state = () => {
	return {
		cards: []
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
			commit("initHome", rst.cards)
		})
		
	}
}

const mutations = {
	initHome(state, cards) {
		state.cards = cards;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}