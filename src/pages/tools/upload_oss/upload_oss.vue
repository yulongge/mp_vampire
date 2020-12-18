<template>
	<view class="tool-oss">
		<view class="upload" @click="toUpload">Upload OSS</view>
	</view>
</template>

<script>
	let OSS = require('ali-oss');
	export default {
		data() {
			return {
				store: null
			}
		},
		onLoad() {
			this.store = new OSS({
				accessKeyId: 'LTAI4GCHnpDFZ85VCWHxhxNz',
				accessKeySecret: 'mvlSTcVQ82QsFTkXwER8gBcGvc4dYf',
				bucket: 'frontend-omp',
				region: 'oss-cn-beijing'
			});
		},
		methods: {
			toUpload() {
				//小程序不支持Blob对象
				const contentJson = {"name": "geyulong", "age": "18"};
				//const data = new OSS.Buffer(JSON.stringify(contentJson));
				const data = new Blob([JSON.stringify(contentJson, null, 2)], {type : 'application/json'});
				this.putObject(data)
			},
			async putObject (data) { //Must provide Buffer/Blob/File for put
				try {
					// object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
					let result = await this.store.put('order.json', data).then(rst => {
						console.log(rst, 'result')
					});
				} catch (e) {
					console.log(e);
				}
			}
		}
	}
</script>

<style lang="less">
	@import url("./upload_oss.less");
</style>
