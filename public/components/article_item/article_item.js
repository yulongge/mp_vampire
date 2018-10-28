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
		_toArticleDetail() {
			console.log(this.data.data, 'toArticle')
			wx.setStorageSync("currentArticle", this.data.data);
			wx.navigateTo({
				url: "/pages/article_detail/article_detail?article_id=" + this.data.data.id
			})
		}	
	}
})
