<template>
	<view class="components-navbar" :class="changeColor ? 'changeColor' : ''">
		<view class='status' :style="{height: statusHeight + 'px'}"></view>
		<view class='navbar' :style="{height: navHeight + 'px'}">
			<view class='navbar_title' :style="{height: navHeight + 'px'}">
				<view>Vampire Knight</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 0,
				navHeight: 0
			}
		},
		props: ['changeColor'],
		methods: {
			goBack() {
				console.log('navigateBack')
				uni.navigateBack({
					delta: 1
				})
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}
		},
		created() {
			var self = this;
		    wx.getSystemInfo({
				success(res) {
					var isIos = res.system.indexOf('iOS') > -1;
					self.statusHeight = res.statusBarHeight;
					self.navHeight = isIos ? 44 : 48;
				}
		    })
		}

		
	}
</script>

<style lang="less">
	@import url(./navbar.less);
</style>
