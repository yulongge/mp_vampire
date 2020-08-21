<template>
	<view class="index-page">
		<Card v-for="(item) in cards" :key="item.id" v-bind:data="item"/>
	</view>
	<official-account></official-account>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Card from '@/components/card/card';

export default {
	data() {
		return {
			title: 'Hello Vampire Jser'
		}
	},
	components: {
		Card
	},
	computed: {
		...mapState({
			config: state => state.config.config,
			nav: state => state.config.config.nav,
			cards: state => state.home.cards,
			share: state => state.config.config.share
		})
	},
	onLoad() {
		this.$store.dispatch("home/getHome");
	},
	methods: {

	},
	onShareAppMessage(res) {
		console.log(this, 'onShareAppMessage')
	    if (res.from === 'button') {// 来自页面内分享按钮
			console.log(res.target)
	    }
	    return {
			title: this.share.title,
			path: this.share.url,
			imageUrl: this.share.img
	    }
	},
	onShareTimeline() {
		return {
			title: this.share.title,
			imageUrl: this.share.img
		}
	}
}
</script>

<style lang="less">
	@import url(./style.less);
</style>
