const {random} = require('../../utils/comm');
const styles = ['large', 'medium', 'small', ''];

Component({
	properties: {
		data: {
			type: Object,
			value: {}
		},
		style: String
	},
	data: {
		style: ""	
	},
	ready() {
		this.setData({
			style: styles[random(0, 4)]
		})
		//console.log(this.data.data, 'ready');	
	},
	methods: {
		
		onLoad() {
			//console.log(this.data.style, 'onLoad')
		}	
	}
})
