<template>
	<view class="page-mine">
		<Navbar />
		<Waiting />
		<Nav v-bind:nav="nav" v-bind:currentId="0" v-bind:upNav="upNav"/>
	</view>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Waiting from '@/components/waiting/waiting'
import Navbar from '@/components/navbar/navbar';
import Nav from '@/components/nav/nav';

export default {
	data() {
		return {
			
		}
	},
	components: {
		Waiting,
		Navbar,
		Nav
	},
	computed: {
		...mapState({
			nav: state => state.config.config.nav,
			upNav: state => state.config.config.upNav
		})
	}
	
}
</script>

<style lang="less">
	@import url(./mine.less);
</style>
