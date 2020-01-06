const {Random} = require('mockjs');

module.exports = (app, prefix)=>{
	/**
	 * 营销活动
	 */
	app.get(`/${prefix}/ordermeal/market`, function(req, res) { 
		let marketList = [],
			len = 3;

		marketList = Random.range(len).map((item, index) => {
			return {
				id: "id" + index,
				name: Random.cname(),
				type: Random.integer(1, 2), //{1: '买赠', 2: '买一赠一'}
				dishsno: "dishsno" + index, //菜品速记码- string类型
				gift_dishsno: "dishsno" + (index + len)
			}
		})
		res.json({
			errcode: 0, //random(0, 1),
			errmsg: ':)',
			result: {
				marketList: marketList
			}
		});
	});
};