import fly from './request/index';

//获取项目配置
const getApp = (data, callback) => fly.get(`/`, {...data}, callback);

//获取菜品信息
const getDishList = (data, callback) => fly.get(`/ordermeal/dishes`, {...data}, callback);

//获取核单页面信息
const getCheckBill = ({orderId}, callback) => fly.get(`/checkbill/${orderId}`, {}, callback);

// 获取点餐页头部轮播信息
const getHeadSwiper = (data,callback) => fly.get(`/dish/swiper`, {...data}, callback);

// 获取点餐页公告活动信息
const getNotice = (data,callback) => fly.get(`/dish/notice`, {...data}, callback);

export default {
	getApp,
	getDishList,
	getCheckBill,
	getHeadSwiper,
	getNotice
}