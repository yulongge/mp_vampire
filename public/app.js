const {initApp} = require('./utils/app_requests');
const {assign} = require('./utils/object');
const Towxml = require('./towxml/main');
let _app = null;

App({
	globalData: {},
	onLaunch() {
		_app = this;		
		initApp(null, {}, rst => {
			//assign(_app.globalData, rst)
			if(rst.length && rst[0].title) {
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
	},
	towxml:new Towxml()
})
