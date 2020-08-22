<template>
	<view class="page-addcard">
		<view class="desc">
			<textarea 
				:adjust-position="true"
				@input="descInput"
				class="desc_input" 
				placeholder-style="color:#F76260" 
				placeholder="寄语"/>
		</view>
		<view class="publish">
			<button class="publish_btn" @click="publish">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				descValue: ""
			}
		},
		methods: {
			descInput(e) {
				this.descValue = e.detail.value;
			},
			publish() {
				this.$store.dispatch("card/publish", this.descValue);
			}
		}
	}
</script>

<style lang="less">
	@import url(./addCard.less);
</style>
