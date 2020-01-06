import BaseController from './BaseController';
import update from 'immutability-helper';

class AppController extends BaseController{

	constructor(props) {
		super(props);
	}

	async initApp() {
		return await this.$api.getApp()
	}
	
}

export default new AppController();
