<template>
	<view class="page-article">
		<Category v-if="category.length" :category="category" @filterCategory="filterCategory"/>
		<view class="artilce-list">
			<view class="artilce-item" v-for="(item, index) in articles" :key="index" @click="toDetail(item)">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.desc}}</view>
				<view class="pic">
					<image :src="item.pic" mode="widthFix" lazy-load="true"></image>
				</view>
				<view class="msg">
					<view class="read">
						<view class="icon"></view>
						<text class="count">{{item.read}}</text>
						
					</view>
					<view class="author">
						{{item.author}}
					</view>
				</view>
				
			</view>
		</view>
		<view v-if="articles.length == 0 && loading == false"  class="nodata">
			<view class="nodata-icon"></view>
			<text>暂无数据</text>
		</view>
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
	</view>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Nav from '@/components/nav/nav';
import Category from '@/components/article-category/article-category.vue';

export default {
	data() {
		return {
			loading: true
		}
	},
	components: {
		Nav,
		Category
	},
	computed: {
		...mapState({
			nav: state => state.config.config.nav,
			upNav: state => state.config.config.upNav,
			articles: state => {
				let articles = state.article.articles;
				articles = articles.map(item => {
					if(!item.read) {
						item.read = Number.parseInt(Math.random(1,100) * 100)
					}
					return item;
				});
				return articles;
			},
			category: state => state.article.category
		})
	},
	onLoad() {
		const _this = this;
		this.$store.dispatch("article/getArticles").then(() => {
			_this.loading = false
		});
		this.$store.dispatch("article/getCategory");
	},
	methods: {
		toDetail(item) {
			const {url, title, pic, _id, read} = item;
			console.log(url, title, pic,'toDetail')
			uni.navigateTo({
				url: `/pages/article_detail/article_detail?url=${url}&title=${title}&pic=${pic}&id=${_id}&read=${read}`
			})
		},
		filterCategory(item) {
			this.$store.dispatch("article/getArticles", {type: item.type});
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
