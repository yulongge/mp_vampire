<template>
	<view class="component-card">
		<view
			v-if="!type"
			class="home-card" 
			:class="cardClass[data.type]" 
			@click="toDo(data)">
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
		<view v-if="type=='recommend'" class="recommend-card">
			<text class="title">为你推荐</text>
			<text class="desc"></text>
			<view class="list">
				<view class="con">
					<view 
						@click="toArticleDetail(item)"
						v-for="item in data" 
						:key="item._id" 
						class="item">
						<image :src="item.pic" mode="widthFix"></image>
						<text class="article-title">{{item.title}}</text>
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
		props: ['data', 'type'],
		computed: {
			
		},
		onLoad() {
			console.log('onload', this.type)
		},
		methods: {
			toDo(item) {
				uni.navigateTo({
					url: item.url
				})
			},
			toArticleDetail(item) {
				const {url, title, pic, _id, read} = item;
				console.log(url, title, pic,'toDetail')
				uni.navigateTo({
					url: `/pages/article_detail/article_detail?url=${url}&title=${title}&pic=${pic}&id=${_id}&read=${read}`
				})
			}
		}
	}
</script>

<style lang="less">
	@import url(./card.less);
</style>
