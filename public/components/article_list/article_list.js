const {random} = require('../../utils/comm');
const styles = ['large', 'medium', 'small', ''];

Component({
	properties: {
		tools: {
			type: Object,
			value: [],
			observer: "_obsTools"
		}	
	},
	data: {
		tools_lf: [],
		tools_rt: []
	},
	methods: {
		_obsTools(newVal, oldVal) {
			console.log(newVal, 'newVal');
			let toolsLF = [],
				toolsRT = [];
			if(newVal.length) {
				toolsLF = newVal.filter((item, index) => index % 2 == 0);
				toolsRT = newVal.filter((item, index) => index % 2 != 0);
			}
			this.setData({
				tools: newVal,
				tools_lf: toolsLF,
				tools_rt: toolsRT
			})
		}	
	}
})
