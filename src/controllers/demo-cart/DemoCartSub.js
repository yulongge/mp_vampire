import EventEitter from '../EventEmitter';
import DemoCart from './DemoCart';

class CartSub extends EventEitter{

	constructor(props) {
		super(props);
		this.init();
	}
	
	init() {
		this.on('cart.initCart', this.initCart.bind(this));
	}

	initCart(curService, model) {
		this.on('demo.addDish', (service, dishlist, data, type) => {
			const {cartlist} = model.initialState.context;
			const result = DemoCart.addProduct(data, type, cartlist);
			curService.send({type: 'UpdateCart', data: {...result}})
		})
	}
}

export default new CartSub();
