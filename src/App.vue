<script>
	export default {
		onLaunch: function() {

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
