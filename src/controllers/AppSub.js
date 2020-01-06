import EventEitter from './EventEmitter';
import App from './App';

class AppSub extends EventEitter{

	constructor(props) {
		super(props);
		this.init();
	}

	init() { //订阅事件
		this.on('app.init', this.initApp.bind(this));
	}

	initApp(service) {
		App.initApp().then(res => {
			service.send({type: 'initApp', data: res});
		})
	}
}

export default new AppSub();
