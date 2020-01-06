import BaseController from '../BaseController';
import update from 'immutability-helper';

class DemoController extends BaseController{

	constructor(props) {
		super(props);
	}

	/**
	 * 初始化菜品信息
	 * @param {Array} params 信息参数
	 */
	initDishes() {
		return this.$api.getDishList()
	}

	/**
	 * 菜品是否估清
	 * @param {Objec} data 当前菜品
	 */
	_isSellOut(data) { //是否估清
		return data.store;
	}

	/**
	 * 更新菜品数量前-判断是否大于最大数量
	 * @param {Objec} data 当前菜品
	 */
	_beforeUpdateCount(data) {
		const {name, count, max} = data;
		if(count >= max) {
			console.log(name + '最多只能添加' + count + '份')
			return false;
		}
		return true;
	}

	/**
	 * 更新菜品数量
	 * @param {Objec} data 当前菜品
	 * @param {Boolean} type 加减菜{1: 加菜，0: 减菜}
	 */
	addDish(data, type, dishlist) {
		let {count} = data;
		if(type && !this._beforeUpdateCount(data)) {
			return dishlist;
		}
		type ? count ++ : count --;
		count = count >=0 ? count : 0;
		const index = dishlist.findIndex(item => item.id == data.id);
		let newList = update(dishlist, {
			[index]: {
				count: {
					$set: count
				}
			}
		})
		return newList;
	}

	
}

export default new DemoController();
