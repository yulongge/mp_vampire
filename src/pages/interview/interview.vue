<template>
	<view class="page-interview">
		<view class="interview-list">
			<view class="interview-item"
				@click="toQuestionPage(item)"
				v-for="(item, index) in interviews" 
				:key="index">
				{{item.title}}
			</view>
		</view>
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
	</view>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import Nav from '@/components/nav/nav';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Nav
		},
		computed: {
			...mapState({
				nav: state => state.config.config.nav,
				upNav: state => state.config.config.upNav,
				interviews: state => state.interview.interviews
			})
		},
		onLoad() {
			this.$store.dispatch("interview/getInterviews");
		},
		onShareAppMessage(res) {
			console.log(this, 'onShareAppMessage')
		    if (res.from === 'button') {// 来自页面内分享按钮
				console.log(res.target)
		    }
		    return {
				title: "吸血鬼题库",
				imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
		    }
		},
		onShareTimeline() {
			return {
				title: "吸血鬼题库",
				imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
			}
		},
		methods: {
			toQuestionPage(item) {
				console.log(item, 'toQuestionPage')
				uni.navigateTo({
					url: `${item.url}?title=${item.title}`
				})
			}
		}
	}
</script>

<style lang="less">
	@import url(./interview.less);
</style>
