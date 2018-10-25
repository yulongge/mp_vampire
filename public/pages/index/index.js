const {getArticle} = require('../../utils/app_requests');
const {assign} = require('../../utils/object');

Page({
	data: {
		tools: []
	},
	onLoad() {
		getArticle({}, rst => {
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
