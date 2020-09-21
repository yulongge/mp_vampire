 ## 有哪些常用的meta标签？

meta标签由name和content两个属性来定义，来描述一个HTML网页文档的元信息(meta-information)，例如作者、日期和时间、网页描述、关键词、页面刷新等，除了一些http标准规定了一些name作为大家使用的共识，开发者也可以自定义name

- charset，用于描述HTML文档的编码形式

```html
<meta charset="UTF-8" >
```
- http-equiv，顾名思义，相当于http的文件头作用,比如下面的代码就可以设置http的缓存过期日期

```html
<meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">
```
- viewport，移动前端最熟悉不过，Web开发人员可以控制视口的大小和比例

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
- apple-mobile-web-app-status-bar-style,开发过PWA应用的开发者应该很熟悉，为了自定义苹果工具栏的颜色

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```