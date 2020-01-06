import { createMachine, interpret } from '@xstate/fsm';

const DemoModel = createMachine(
	{
		id: 'demo',
		initial: 'init',
		context: {
			dishlist: []
		},
		states: {
			init: {
				on: {
					UpdateDish: {
						actions: (ctx, e) => {
							ctx.dishlist = e.data;
						}
					}
				}
			}
		}
	}
)

export default {
	...DemoModel,
	emitService: interpret(DemoModel).start()
};