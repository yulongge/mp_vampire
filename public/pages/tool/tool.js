const {getTools} = require('../../utils/app_requests');
const {assign} = require('../../utils/object');

Page({
	data: {
		tools: []
	},
	onLoad() {
		getTools({}, rst => {
			this.setData({
				tools: rst
			})
			console.log(rst, 'getTools')
		})
	},
	onShareAppMessage: function (res) {
		return {
		  title: 'Vampire'
		}
	  }
})