import BaseController from '../BaseController';
import update from 'immutability-helper';

class CartController extends BaseController{

	constructor(props) {
		super(props);
	}

	_beforeAddItem(item) { //加菜前判断
		return this._isMaxCount(item);
	}

	/**
	 * 更新菜品数量前-判断是否大于最大数量
	 * @param {Objec} data 当前菜品
	 */
	_isMaxCount(data) {
		const {name, count, max} = data;
		if(count >= max) {
			console.log(name + '最多只能添加' + count + '份')
			return false;
		}
		return true;
	}

	addProduct(item, type, cartlist) {
		const count = this._updateProductCount(item, type);
		if(count === 0) {
			return this._removeProduct(item, cartlist);
		} else {
			return this._addProduct(item, count, cartlist)
		}
	}

	_removeProduct(item, cartlist) {
		const index = cartlist.findIndex(cart => cart.id === item.id);
		let newList = [];
		if(index >= 0) {
			newList = update(cartlist, {
				$splice: [[index, 1]]
			})
		} else {
			newList = update(cartlist, {});
		}
		const cartCount = this._calcCount(newList);
		return {newList: newList, cartCount: cartCount}
	}

	_addProduct(item, count, cartlist) {
		const index = cartlist.findIndex(cart => cart.id === item.id);
		let newList = [];
		if(index >= 0) {
			newList = update(cartlist, {
				[index]:{
					count: {
						$set: count
					}
				}
			})
		} else {
			newList = update(cartlist, {
				$push: [{...item, count}]
			})
		}

		const cartCount = this._calcCount(newList);
		return {newList: newList, cartCount: cartCount}
	}

	_updateProductCount(data, type) {
		let {count} = data;
		if(type && !this._beforeAddItem(data)) {
			return count;
		}
		type ? count ++ : count --;
		return count >=0 ? count : 0;
	}

	_calcCount(cartlist) {//计算购物车数量
		let sumCount = 0;
		sumCount = cartlist.reduce((total, item) => {
			return total + item.count;
		}, 0)
		return sumCount;
	}
}

export default new CartController();
