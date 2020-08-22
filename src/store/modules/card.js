const state = () => {
	return {
		
	}
}

const getters = {
	
}

const actions = {
	publish({state, commit}, desc) {
		console.log(desc, 'publish')
	}
}

const mutations = {
	
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}