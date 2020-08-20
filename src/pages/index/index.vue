<template>
	<view class="index-page">
		<Card v-for="(item) in cards" :key="item.id" v-bind:data="item"/>
	</view>
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
			cards: state => state.home.cards
		})
	},
	onLoad() {
		this.$store.dispatch("home/getHome");
	},
	methods: {

	}
}
</script>

<style lang="less">
	@import url(./style.less);
</style>
