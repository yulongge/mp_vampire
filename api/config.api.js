/*应用全局*/
module.exports = (app, prefix)=>{

	/**
	 * 获得全局数据
	 */
	app.get(`/${prefix}/config`, function(req, res) { 
		res.json({
			errcode: 0, //random(0, 1),
			errmsg: '网络异常',
			result: {
				title: '首页', //应用标题
				lang: 'zh', //语言 {en: 英文, zh: 中文}	
			}
		});
	});
};