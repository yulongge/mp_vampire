<template>
	<view class="cart-modal">
		<block v-for="item in cartlist" :key="item.id">
			<view class="item">
				<view class="name">{{item.name}}</view>
				<view class="count">{{item.count}}</view>
			</view>
		</block>
	</view>
</template>
<script>
import CartModel from "@/models/DemoCartModel";
import CartCtrl from '@/controllers/demo-cart/DemoCartSub';
import { interpret } from '@xstate/fsm';

const emitService = CartModel.emitService;
export default {
    data() {
        return {
			current: CartModel.initialState
        }
	},
    created () {
		emitService.subscribe(state => {
			this.current = state;
		});
	},
	mounted() {	
		CartCtrl.emit('cart.initCart', emitService, CartModel);
	},
	computed: {
		cartlist() {
			return this.current.context.cartlist
		}
	},

    methods: {
		
    }
}
</script>
<style lang="less" scoped>
	@import './cart-modal.less';
</style>
