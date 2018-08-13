const {initApp} = require('./utils/app_requests');
const {assign} = require('./utils/object');
let _app = null;

App({
	globalData: {},
	onLaunch() {
		_app = this;		
		initApp(null, {}, rst => {
			console.log(rst, 'rst');
			//assign(_app.globalData, rst)
			if(rst.length && rst[0].title) {
				console.log(rst[0].title, 'title')
				setTimeout(function () {
					wx.setNavigationBarTitle({
						title: rst[0].title
					});
				}, 200);
			}
		});
	},
	onShow() {
		console.log("onShow coming...")
	}
})
