<template>
	<view class="nav">
		<view 
			@click="toPage(item)"
			v-for="(item, index) in data" 
			:key="item.id" 
			class="nav-item">
			<image :src="index == currentId ? item.a_icon : item.icon"></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['data', 'currentId'],
		methods: {
			toPage(item) {
				console.log(item, 'toPage')
				uni.redirectTo({
					url: item.url
				})
			}
		}
		
	}
</script>

<style lang="less">
	@import url(./nav.less);
</style>
