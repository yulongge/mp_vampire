<template>
	<view class="component-caterory">
		<view class="category-list">
			<view
				@click="filterCategory(item)"
				v-for="item in category" 
				:key="item._id" 
				class="category-item">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ["category"],
		computed: {
			
		},
		methods: {
			filterCategory(item) {
				console.log(item, 'filterCategory')
				this.$emit("filterCategory", item)
			}
		}
	}
</script>

<style lang="less">
	@import url(./article-category.less);
</style>
