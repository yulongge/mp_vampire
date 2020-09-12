<template>
	<view class="page-question">
		<view class="qeustions" v-if="questions.length">
			<view 
				class="q_item"
				 @click="showAnswer(item, index)"
				v-for="(item, index) in questions" 
				:key="index">
				<text class="title">{{item.title}}</text>
				<view v-if="answer.length && currentIndex == index" class="answer">
					<view class="con">
						<wxParse :content="answer"/>
					</view>
					
					<view class="close" @click="closeAnswer"></view>
				</view>
			</view>
			
			
		</view>
		<view v-else class="nodata">
			<view class="nodata-icon"></view>
			<text>暂无数据</text>
		</view>
		
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
	</view>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import Nav from '@/components/nav/nav';
	import marked from 'marked'
	import wxParse from 'mpvue-wxparse';
	
	export default {
		data() {
			return {
				currentIndex: 0,
				shareTitle: ''
			}
		},
		components: {
			Nav,
			wxParse
		},
		computed: {
			...mapState({
				nav: state => state.config.config.nav,
				upNav: state => state.config.config.upNav,
				questions: state => state.question.questions,
				answer: state =>  {
					console.log(marked(state.question.answer), 'computer answer')
					return marked(state.question.answer);
				}
			})
		},
		onLoad(option) {
			const {title} = option;
			console.log(title, 'title')
			this.shareTitle = title;
			uni.setNavigationBarTitle({
			    title: title
			});
			this.$store.dispatch("question/getQuestions", {title});
		},
		onShareAppMessage(res) {
			console.log(this, 'onShareAppMessage')
		    if (res.from === 'button') {// 来自页面内分享按钮
				console.log(res.target)
		    }
		    return {
				title: this.shareTitle,
				imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
		    }
		},
		onShareTimeline() {
			return {
				title: this.shareTitle,
				imageUrl: "https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/saved.png"
			}
		},
		methods: {
			showAnswer(item, index) {
				console.log(item, 'showAnswer')
				this.$store.dispatch("question/getAnswer", item.url);
				this.currentIndex = index;
			},
			closeAnswer() {
				this.$store.dispatch("question/closeAnswer")
			}
		}
	}
</script>

<style lang="less">
	@import url("mpvue-wxparse/src/wxParse.css");
	@import url("./question.less");
</style>
