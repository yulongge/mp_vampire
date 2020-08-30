import fly from './request/index';

//获取项目配置
export const getMarkdownData = (url, data, callback) => fly.get(url, {...data}, callback, 'md');

