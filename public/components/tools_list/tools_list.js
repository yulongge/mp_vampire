const {random} = require('../../utils/comm');
const styles = ['large', 'medium', 'small', ''];

Component({
	properties: {
		tools: {
			type: Object,
			value: []
		}	
	},
	data: {},
	methods: {
		onLoad() {
			console.log('onLoad')
		}	
	}
})
