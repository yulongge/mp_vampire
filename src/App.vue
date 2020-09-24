<script>
	export default {
		onLaunch: function(option) {
			console.log(option, 'onLaunch')
			this.$store.dispatch("config/getConfig");
		},
		onShow: function(option) {
			console.log(option, 'app onShow')
			this.checkVersion();
		},
		onHide: function() {
			//console.log('App Hide')
		},
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
				console.log(res.target)
		    }
		    return {
				title: 'vampire',
				path: '/pages/index/index'
		    }
		},
		methods: {
			checkVersion() {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function (res) {
					// 请求完新版本信息的回调
					console.log(res.hasUpdate);
				});
				
				updateManager.onUpdateReady(function (res) {
				  uni.showModal({
				    title: '更新提示',
				    content: '新版本已经准备好，是否重启应用？',
				    success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
				    }
				  });
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
