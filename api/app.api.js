
/*应用全局*/
module.exports = (app, prefix)=>{
	/**
	 * 获得全局数据
	 */
	app.get(`/${prefix}/`, function(req, res) { 
		res.json({
			errcode: 0, //random(0, 1),
			errmsg: ':)',
			result: {
				title: '应用聚合页', //应用标题
				lang: 'en', //语言 {en: 英文, zh: 中文}
				
			}
		});
	});
};