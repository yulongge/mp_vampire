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
		methods: {
			toQuestionPage(item) {
				console.log(item, 'toQuestionPage')
				uni.redirectTo({
					url: `${item.url}?title=${item.title}`
				})
			}
		}
	}
</script>

<style lang="less">
	@import url(./interview.less);
</style>
