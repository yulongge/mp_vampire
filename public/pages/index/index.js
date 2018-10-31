const {getArticle} = require('../../utils/app_requests');
const {assign} = require('../../utils/object');

Page({
	data: {
		tools: []
	},

	_init() {
		getArticle({}, rst => {
			this.setData({
				tools: rst
			})
			console.log(rst, 'getTools')
		})
	},

	onShow() {
		this._init();
	},

	onLoad() {
		
	},

	onShareAppMessage(res) {
		return {
		  title: 'Vampire'
		}
	},

	onPullDownRefresh() {
		this._init();
		wx.stopPullDownRefresh();
	}
})
