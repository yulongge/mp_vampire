# app

## 小程序信息

appid: wx73792f0f899de8b1

## Project setup
```
npm install
```

### 简单启动项目(h5)
```
# 服务
npm run serve
# mock数据
npm run mock
```

### 构建打包
```
# 指定平台的开发时构建(微信小程序、支付宝小程序、H5)
npm run dev:mp-weixin
npm run dev:mp-alipay
npm run dev:h5

# 指定平台的打包构建(微信小程序、支付宝小程序、H5)
npm run build:mp-weixin
npm run build:mp-alipay
npm run build:h5

```

### 调用命令
```
# 启动本地localhost mock服务
npm rum mock
npm run mock -ip=1 -port=XXX

#生成测试环境地址

# 启动本地调试
npm run reset_local

# 启动ip调试
npm run reset_ip

# 启动dev调试
npm run reset_dev

# 启动beta调试
npm run reset_beta

# 启动pro调试
npm run reset_pro

```

### 目录结构


### 目录结构

```
├ api //mock数据
├ config //一些项目配置文件
├ docs //文档说明
├ dist //打包目录
└ src
  ├ common //主要封装一些常用操作
  ├ components //组件
  ├ controller //业务逻辑
  ├ pages //页面
  ├ static //静态目录，存放图片，字体等
  ├ store //vuex状态控制
  ├ utils //工具函数
  
```
### Q&A

单元测试
精密测试，灰度发版
worker 异步socket(支付宝不支持web worker)


把城市门店信息放到cdn

可以省略api
shoplist api
index api
compareDistance api
