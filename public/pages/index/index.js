const {getTools} = require('../../utils/app_requests');
const {assign} = require('../../utils/object');

Page({
	data: {
		tools: []
	},
	onLoad() {
		console.log('index coming...')
		getTools({}, rst => {
			this.setData({
				tools: rst
			})
			console.log(rst, 'getTools')
		})
	}
})
