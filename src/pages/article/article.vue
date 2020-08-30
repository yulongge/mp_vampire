<template>
	<view class="page-article">
		<view class="artilce-list">
			<view class="artilce-item" v-for="(item, index) in articles" :key="index" @click="toDetail(item.url)">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
				<view class="pic">
					<image :src="item.pic" mode="widthFix" lazy-load="true"></image>
				</view>
				<view class="author">
					{{item.author}}
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
			
		}
	},
	components: {
		
	},
	computed: {
		...mapState({
			articles: state => state.article.articles
		})
	},
	onLoad() {
		this.$store.dispatch("article/getArticles");
	},
	methods: {
		toDetail(url) {
			console.log(url, 'toDetail')
			uni.redirectTo({
				url: `/pages/article_detail/article_detail?url=${url}`
			})
		}
	}
	
}
</script>

<style lang="less">
	@import url(./article.less);
</style>
