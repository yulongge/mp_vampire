import EventEitter from '../EventEmitter';
import Demo from './Demo';

class DemoSub extends EventEitter{

	constructor(props) {
		super(props);
		this.init();
	}

	init() { //订阅事件
		this.on('demo.initDishes', this.initDishes.bind(this));
		this.on('demo.addDish', this.addDish.bind(this));
	}

	/**
	 * 初始化菜品信息
	 * @param {Array} params 信息参数
	 */
	initDishes(service) {
		Demo.initDishes().then(res => {
			service.send({type: 'UpdateDish', data: res.dishlist});
		})
	}

	/**
	 * 更新菜品数量
	 * @param {Objec} data 当前菜品
	 * @param {Boolean} type 加减菜{1: 加菜，0: 减菜}
	 */
	addDish(service, dishlist, data, type) {
		let newList = Demo.addDish(data, type, dishlist);
		service.send({type: 'UpdateDish', data: newList});
	}

	
}

export default new DemoSub();
