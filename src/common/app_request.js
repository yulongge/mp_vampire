import fly from './request/index';

//获取项目配置
export const getInitConfig = (data, callback) => fly.get(`/config`, {...data}, callback);

//获取菜品信息
export const getDishList = (data, callback) => fly.get(`/ordermeal/dishes`, {...data}, callback);

//获取核单页面信息
export const getCheckBill = ({orderId}, callback) => fly.get(`/checkbill/${orderId}`, {}, callback);

// 获取点餐页头部轮播信息
export const getHeadSwiper = (data,callback) => fly.get(`/dish/swiper`, {...data}, callback);

// 获取点餐页公告活动信息
export const getNotice = (data,callback) => fly.get(`/dish/notice`, {...data}, callback);

// export default {
// 	getInitConfig,
// 	getDishList,
// 	getCheckBill,
// 	getHeadSwiper,
// 	getNotice
// }