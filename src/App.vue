<script>
	export default {
		onLaunch: function() {
			if(!wx.cloud) {
				console.error('请使用2.2.3或以上的基础库版本，进行云开发')
			} else {
				wx.cloud.init({
					traceUser: true,
					env: "vampire-gyl"
				})
			}


		},
		onShow: function() {
			this.$store.dispatch("config/getConfig");
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
