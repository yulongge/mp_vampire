<template>
	<view class="cart-icon" @click="showOrdHideCart">
		{{cartCount}}
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
	created() {
		emitService.subscribe(state => {
			this.current = state;
		});
	},
	mounted() {	
		CartCtrl.emit('cart.initCart', emitService, CartModel);
	},
	computed: {
		cartCount() {
			return this.current.context.cartCount
		},
		cartlist() {
			return this.current.context.cartlist;
		}
	},

    methods: {
		showOrdHideCart() {
			this.$emit('showOrdHideCart')
		}
    }
}
</script>
<style lang="less" scoped>
	@import './cart-icon.less';
</style>
