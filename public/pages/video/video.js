// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	src: "",
  isWifi: true,
  isPlay: false,
  videoSize: 6
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
	const _this = this;
	wx.getNetworkType({
		success (res) {
			const networkType = res.networkType;
			if(networkType != "wifi") {
				_this.setData({
					isWifi: false
        })
        _this.videoCtx.pause()
			} else {
				_this.setData({
					isWifi: true
				})
			}
			console.log(networkType, 'networkType')
		}
	})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
	const _this = this;
	this.videoCtx = wx.createVideoContext('myVideo');
	wx.onNetworkStatusChange(function (res) {
		const networkType = res.networkType;
		if(networkType != "wifi") {
			_this.setData({
				isWifi: false
      })
      _this.videoCtx.pause()
		} else {
			_this.setData({
				isWifi: true
			})
		}
	})
  },

  bindButtonTap() {
	const _this = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        _this.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  play() {
    this.setData({
      isPlay: true
    })
    this.videoCtx.play()
  },
  
  pause() {
    this.videoCtx.pause()
  },

  endVideo() {
    this.setData({
      isPlay: false
    })
  }

  
})