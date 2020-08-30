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
			const {url} = option;
			this.$store.dispatch("article/getMarkdown", url);
		}
	}
</script>

<style lang="less">
	@import url("mpvue-wxparse/src/wxParse.css");
	@import url('./article_detail.less');
</style>
