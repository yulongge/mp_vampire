<template>
	<view class="home-card" :class="cardClass[data.type]">
		<block v-if="data.type == 0">
			<view class="avatar">
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<text class="brief">三尺微命，一介书生</text>
		</block>
		<block v-if="data.type == 1">
			<text class="desc">{{data.desc}}</text>
			<image class="bg" :src="data.bg" mode="widthFix" lazy-load="true"></image>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardClass: {
					0: 'default',
					1: 'activity',
					2: 'recommand',
					3: 'list'
				}
			};
		},
		props: ['data'],
		computed: {
			
		}
	}
</script>

<style lang="less">
	@import url(./card.less);
</style>
