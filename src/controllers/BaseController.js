import api from '../common/app_request';

export default class BaseController {
	constructor() {
		this.$api = api;
	}
}