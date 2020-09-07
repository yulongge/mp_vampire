<template>
	<view class="page-article">
		<view class="artilce-list">
			<view class="artilce-item" v-for="(item, index) in articles" :key="index" @click="toDetail(item)">
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
		toDetail(item) {
			const {url, title, pic} = item;
			console.log(url, title, pic,'toDetail')
			uni.redirectTo({
				url: `/pages/article_detail/article_detail?url=${url}&title=${title}&pic=${pic}`
			})
		}
	},
	onShareAppMessage(res) {
		console.log(this, 'onShareAppMessage')
	    if (res.from === 'button') {// 来自页面内分享按钮
			console.log(res.target)
	    }
	    return {
			title: "吸血鬼日记",
			imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
	    }
	},
	onShareTimeline() {
		return {
			title: "吸血鬼日记",
			imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
		}
	}
	
}
</script>

<style lang="less">
	@import url(./article.less);
</style>
