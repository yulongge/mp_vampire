<template>
	<view class="page-question">
		question
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			const {title} = option;
			console.log(title, 'title')
			uni.setNavigationBarTitle({
			    title: title
			});
		}
	}
</script>

<style lang="less">
	@import url(./question.less);
</style>
