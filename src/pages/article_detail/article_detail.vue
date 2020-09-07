<template>
	<view class="article-detail">
		<wxParse v-if="detail.length" :content="detail"/>
	</view>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import marked from 'marked'
	import wxParse from 'mpvue-wxparse'
	export default {
		data() {
			return {
				shareTitle: "",
				shareImg: ""
			}
		},
		components: {
			wxParse
		},
		computed: {
			...mapState({
				detail: state => marked(state.article.articleDetail)
			})
		},
		onLoad(option) {
			console.log(option, 'onLoad')
			const {url, title, pic} = option;
			this.$store.dispatch("article/getMarkdown", url);
			this.shareTitle = title;
			this.shareImg = pic;
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
