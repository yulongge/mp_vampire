<template>
	<view class="article-detail">
		<image :src="shareImg" mode="widthFix" class="pic"></image>
		<wxParse v-if="detail.length" :content="detail"/>
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
	</view>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import marked from 'marked'
	import wxParse from 'mpvue-wxparse';
	import Nav from '@/components/nav/nav';
	
	export default {
		data() {
			return {
				shareTitle: "",
				shareImg: ""
			}
		},
		components: {
			wxParse,
			Nav
		},
		computed: {
			...mapState({
				detail: state => marked(state.article.articleDetail),
				nav: state => state.config.config.nav,
				upNav: state => state.config.config.upNav
			})
		},
		onLoad(option) {
			console.log(option, 'onLoad')
			const {url, title, pic} = option;
			this.$store.dispatch("article/getMarkdown", url);
			this.shareTitle = title;
			this.shareImg = pic;
			uni.setNavigationBarTitle({
			    title: title
			});
		},
		onShareAppMessage(res) {
			console.log(this, 'onShareAppMessage')
		    if (res.from === 'button') {// 来自页面内分享按钮
				console.log(res.target)
		    }
		    return {
				title: this.shareTitle,
				imageUrl: this.shareImg
		    }
		},
		onShareTimeline() {
			return {
				title: this.shareTitle,
				imageUrl: this.shareImg
			}
		}
	}
</script>

<style lang="less">
	@import url("mpvue-wxparse/src/wxParse.css");
	@import url('./article_detail.less');
</style>
