<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {
			this.$store.dispatch("config/getConfig");
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
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
