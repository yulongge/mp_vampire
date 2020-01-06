import { createMachine, interpret } from '@xstate/fsm';
import locale from '@/common/locale';

const AppModel = createMachine(
	{
		id: 'app',
		initial: 'init',
		context: {
			locale: locale()
		},
		states: {
			init: {
				on: {
					initApp: {
						actions: (ctx, e) => {
							ctx.locale = locale(e.data.lang);
						}
					}
				}
			}
		}
	}
)

export default {
	...AppModel,
	emitService: interpret(AppModel).start()
};