const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
	currentArticle: {},
	article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	const currentArticle = wx.getStorageSync("currentArticle");
	this.setData({
		currentArticle: currentArticle
	});
	const _ts = this;

	//请求markdown文件，并转换为内容
	wx.request({
		url: currentArticle.a_url,
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (res) => {
			//将markdown内容转换为towxml数据
			let data = app.towxml.toJson(res.data,'markdown');

			//设置文档显示主题，默认'light'
			data.theme = 'dark';

			//设置数据
			_ts.setData({
				article: data
			});
		}
	});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})