<template>
	<view class="dishlist">
	<block v-for="item in dishlist" :key="item.id">
		<view class="dishitem">
			<view class="item_lf">
				<image class="img" mode="scaleToFill" :src="item.image"/>
			</view>
			<view class="item_rt">
				<text class="name">{{item.name}}</text>
				<text class="price">{{item.price}}</text>
			</view>
			<view class="number-add-sub">
				<NumberAddSub
					:item="item"
					:count="item.count"
					@add="add" 
					@sub="sub" />
			</view>
			
		</view>
	</block>
	</view>
</template>
<script>
import DemoCtrl from '@/controllers/demo/DemoSub';
import NumberAddSub from '@/components/common/number-add-sub/number-add-sub'
import DemoModel from '@/models/DemoModel';

const {emitService} = DemoModel;
export default {
	components: {
		NumberAddSub
	},
	created() {
		emitService.subscribe(state => {
			this.current = state;
		});
	},

	computed: {
		dishlist() {
			return this.current.context.dishlist
		}
	},
	
	data() {
		return {
			current: DemoModel.initialState,
		}
	},
	mounted() {	
		DemoCtrl.emit('demo.initDishes', emitService);
	},
	methods: {
		add(item) {
			DemoCtrl.emit('demo.addDish', emitService, this.dishlist, item, 1);
		},
		sub(item) {
			DemoCtrl.emit('demo.addDish', emitService, this.dishlist, item, 0, );
		}
	}
}
</script>
<style lang="less" scoped>
	@import './demo.less';
</style>
