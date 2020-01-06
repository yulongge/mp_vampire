
/*点餐数据*/
module.exports = (app, prefix)=>{

	/**
	 * 获得点餐项目配置
	 */
	app.get(`/${prefix}/ordermeal/config`, function(req, res) { 
		res.json({
			errcode: 0, //random(0, 1),
			errmsg: ':)',
			result: {
				title: '点餐', //应用标题
				lang: 'en', //语言 {en: 英文, zh: 中文}
				
			}
		});
	});
  };