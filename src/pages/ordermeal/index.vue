<template>
  <div id="app">
    <Demo />
	<Cart />
  </div>
</template>

<script>
import Demo from '@/components/demo/demo';
import Cart from '@/components/cart/cart';

export default {
	name: 'app',
	components: {
		Demo,
		Cart
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
	@import './index.less';
</style>
