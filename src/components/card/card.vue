<template>
	<view class="home-card" :class="cardClass[data.type]">
		<text class="title">{{data.title}}</text>
		<view class="content">
			<view v-if="data.type == 1">
				<view class="list" v-for="s_item in data.list" :key="s_item.id">
					<view class="pic">
						
					</view>
					<view class="msg">
						<text class="s_title">{{s_item.title}}</text>
						<text class="s_title">{{s_item.desc}}</text>
					</view>
				</view>
			</view>
		</view>
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
