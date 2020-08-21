<template>
	<view class="page-mine">
		<Navbar />
		<Waiting />
	</view>
</template>

<script>
import Waiting from '@/components/waiting/waiting'
import Navbar from '@/components/navbar/navbar';

export default {
	data() {
		return {
			
		}
	},
	components: {
		Waiting,
		Navbar
	}
	
}
</script>

<style lang="less">
	@import url(./mine.less);
</style>
