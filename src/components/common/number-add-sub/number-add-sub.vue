<template>
   <view class="number-add-sub">
	   <view class="sub" @click="sub">-</view>
	   <view class="number">{{count}}</view>
	   <view class="add" @click="add">+</view>
	</view>
</template>
<script>

export default {
    data() {
        return {
			//number: 0
        }
	},
	props: ['item', 'count'],
    created () {
		//console.log(this.data, 'number add ')
	},

	computed: {
		
	},

    methods: {
		add() {
			this.$emit('add', this.item)
		},
		sub() {
			this.$emit('sub', this.item)
		}
    }
}
</script>
<style lang="less" scoped>
	@import './number-add-sub.less';
</style>
