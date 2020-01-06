<template>
	<button class="demo-btn" @click="toPage('ordermeal')">{{locale.ordermeal.title}}</button>
</template>

<script>
import AppModel from '@/models/AppModel';
const {emitService} = AppModel;

export default {
  name: 'app',
  data() {
	  return {
		  current: {}
	  }
  },
  computed: {
	  locale() {
		  return this.current.locale;
	  }
  },
  components: {

  },
  onLoad() {
		emitService.subscribe(state => {
			this.current = state.context;
		});
  },
  mounted() {
		//console.log(this, this.$locale, this.love, 'mounted')
  },
  methods: {
	toPage(type='ordermeal') {
		let toPageUrl = "";
		switch(type) {
			case 'ordermeal':
				toPageUrl = "/pages/ordermeal/index";
				break;
			default:
				toPageUrl = "/pages/ordermeal/index";
				
		}
		uni.navigateTo({
			url: toPageUrl
		});
	}
}

}
</script>
<style lang="less" scoped>
	@import './index.less';
</style>
