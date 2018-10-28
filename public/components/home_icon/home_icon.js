Component({
	properties: {
		
	},
	data: {
		
	},
	methods: {
        toHome() {
            console.log("coing....")
            wx.reLaunch({
                url: '/pages/index/index'
            })
        }
	}
})