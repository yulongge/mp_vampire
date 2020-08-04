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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.avatar {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
		border-radius: 50%;
		overflow: hidden;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
