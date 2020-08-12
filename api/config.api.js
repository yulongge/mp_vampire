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
				cards: [
					{	
						id: 1,
						title: "欢迎回来",
						desc: "",
						type: "1", //{1:default, 2: card: 3:list}
						list: [
							{
								title: "web世界",
								pic: "",
								desc: "带你领略，web世界的精彩"
							}
						]
					}
				],
				navs: [
					{
						title: "首页",
						icon: "",
						a_icon: ""
					},
					{
						title: "我的",
						icon: "",
						a_icon: ""
					}
				]
			}
		});
	});
};