import { createMachine, interpret } from '@xstate/fsm';

const CartModel = createMachine(
	{
		id: 'cart',
		initial: 'init',
		context: {
			cartlist: [],
			cartCount: 0
		},
		states: {
			init: {
				on: {
					UpdateCart: {
						actions: (ctx, e) => {
							ctx.cartCount = e.data.cartCount;
							ctx.cartlist = e.data.newList;
						}
					}
				}
			}
		}
	}
)

export default {
	...CartModel,
	emitService: interpret(CartModel).start()
};