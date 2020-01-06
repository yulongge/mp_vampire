const {Random} = require('mockjs');

module.exports = (app, prefix)=>{
	/**
	 * 菜品信息
	 */
	app.get(`/${prefix}/ordermeal/dishes`, function(req, res) { 
		let dishes = [],
			len = 20;

		dishes = Random.range(len).map((item, index) => {
			return {
				id: "id" + index, //菜品id- string类型
				name: Random.cword(3, 5) + '菜肴', //菜品名称
				dishsno: "dishsno" + index, //菜品速记码- string类型
				price: Random.int(1, 100), 
				image: Random.image('100x100'),
				count: 0,
				max: Random.int(1, 10)
			}
		})
		res.json({
			errcode: 0, //random(0, 1),
			errmsg: ':)',
			result: {
				dishlist: dishes
			}
		});
	});
};