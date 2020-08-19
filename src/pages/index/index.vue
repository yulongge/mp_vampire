<template>
	<view class="index-page">
		<view v-for="(item) in cards" :key="item.id" class="card">
			<text class="title">{{item.title}}</text>
			<view class="content">
				<view v-if="item.type ==1">
					<view class="list" v-for="s_item in item.list" :key="s_item.id">
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
	</view>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			title: 'Hello Vampire Jser'
		}
	},
	computed: {
		...mapState({
			config: state => state.config.config,
			cards: state => state.config.config.cards
		})
	},
	onLoad() {
		uni.showLoading({
			title: '处理中...'
		})
		uniCloud.callFunction({
			name: 'config',
			data: {
				name: 'DCloud',
				subType: 'uniCloud',
				createTime: Date.now()
			}
		}).then((res) => {
			uni.hideLoading();
			console.log(res, 'res')
		})
	},
	methods: {

	}
}
</script>

<style lang="less">
	@import url(./style.less);
</style>
