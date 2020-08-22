<template>
	<view class="index-page" :style="{backgroundImage:'url(' + homeBg + ')'}">
		<Card v-for="(item) in cards" :key="item.id" v-bind:data="item"/>
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
		<official-account></official-account>
	</view>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Card from '@/components/card/card';
import Nav from '@/components/nav/nav';

export default {
	data() {
		return {
			title: 'Hello Vampire Jser'
		}
	},
	components: {
		Card,
		Nav
	},
	computed: {
		...mapState({
			config: state => state.config.config,
			nav: state => state.config.config.nav,
			upNav: state => state.config.config.upNav,
			cards: state => state.home.cards,
			homeBg: state => state.home.homeBg,
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
