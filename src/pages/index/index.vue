<template>
	<view class="content">
		<view class="avatar">
			<open-data type="userAvatarUrl"></open-data>
		</view>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Vampire Jser'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import url(./style.less);
</style>
