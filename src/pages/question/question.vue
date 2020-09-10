<template>
	<view class="page-question">
		<view class="qeustions">
			<view class="q_item" v-for="(item, index) in questions" :key="index">
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
				questions: state => state.question.questions
			})
		},
		onLoad(option) {
			const {title} = option;
			console.log(title, 'title')
			uni.setNavigationBarTitle({
			    title: title
			});
			this.$store.dispatch("question/getQuestions", {title});
		}
	}
</script>

<style lang="less">
	@import url(./question.less);
</style>
