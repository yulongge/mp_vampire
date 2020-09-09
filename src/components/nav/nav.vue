<template>
	<block>
		<view class="navIcon" @click="switchMenu"></view>
		<view class="nav" v-if="showMenu">
			<view 
				@click="toPage(item)"
				v-for="(item, index) in navData" 
				:key="item.id" 
				class="nav-item">
				<image :src="index == currentId ? item.a_icon : item.icon"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- <view class="upNav" v-if="showMenu">
			<view 
				@click="toPage(item)"
				v-for="(item, index) in upNav" 
				:key="item.id" 
				class="nav-item">
				<image :src="index == currentId ? item.a_icon : item.icon"></image>
			</view>
		</view> -->
	</block>
	
</template>

<script>
	export default {
		data() {
			return {
				showMenu: false
			}
		},
		props: ['nav', 'upNav', 'currentId'],
		computed: {
			navData: function() {
				return this.nav && this.nav.filter(item => item.show);
			}
		},
		methods: {
			switchMenu() {
				this.showMenu = !this.showMenu
			},
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
