<template>
   <view class="cart">
	   <CartModal v-if="showCartModal"/>
	   <CartIcon @showOrdHideCart="showOrdHideCart"/>
	</view>
</template>
<script>
import CartIcon from '@/components/cart/cart-icon/cart-icon';
import CartModal from '@/components/cart/cart-modal/cart-modal';

export default {
    data() {
        return {
          showCartModal: false
        }
	},
	props: ['data'],
	components: {
		CartIcon,
		CartModal
	},
    onLoad () {
		
	},
	computed: {
		
	},

    methods: {
		showOrdHideCart() {
			let {showCartModal} = this;
			this.showCartModal = !showCartModal;
		}
    }
}
</script>
<style lang="less" scoped>
	@import './cart.less';
</style>
