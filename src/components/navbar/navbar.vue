<template>
	<view class="component-navbar">
		<!-- <view class="back" @click="goBack"></view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
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
		}
	}
</script>

<style lang="less">
	@import url(./navbar.less);
</style>
