import Vue from 'vue';
import Vuex from 'vuex';
import config from './modules/config';
import home from './modules/home';
import card from './modules/card'
import api from '../common/app_request';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
	modules: {
		config,
		home,
		card
	},
	strict: debug,
	//plugins: debug ? [createLogger()] : []
})