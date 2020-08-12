<template>
	<view class="content">
		<view class="avatar">
			<open-data type="userAvatarUrl"></open-data>
		</view>
		<view>
			<text class="title">{{config.title}}</text>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			title: 'Hello Vampire Jser'
		}
	},
	computed: {
		...mapState({
			config: state => state.config.config
		}),
		...mapGetters('config', {
			config: 'config'
		})
	},
	onLoad() {
		console.log(this, 'onLoad')
	},
	methods: {

	}
}
</script>

<style lang="less">
	@import url(./style.less);
</style>
