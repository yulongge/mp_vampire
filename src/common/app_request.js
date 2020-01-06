import fly from './request/index';

//获取项目配置
const getApp = (data, callback) => fly.get(`/`, {...data}, callback);

//获取菜品信息
const getDishList = (data, callback) => fly.get(`/ordermeal/dishes`, {...data}, callback);

export default {
	getApp,
	getDishList
}