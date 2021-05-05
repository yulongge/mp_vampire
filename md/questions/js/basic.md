### js基础

1. 列举三种禁止浏览器缓存的头字段，并写出响应的设置值.列举三种禁止浏览器缓存的头字段，并写出响应的设置值

Expires：告诉浏览器把回送的资源缓存多长时间 -1或0则是不缓存 简要：添加Expires头能有效的利用浏览器的缓存能力来改善页面的性能，能在后续的页面中有效避免很多不必要的Http请求，WEB服务器使用Expires头来告诉Web客户端它可以使用一个组件的当前副本，直到指定的时间为止。 例如：Expires：Thu，15 Apr 2010 20：00：00 GMT; 他告诉浏览器缓存有效性持续到2010年4月15日为止，在这个时间之内相同的请求使用缓存，这个时间之外使用http请求。

Cache-Control：no-cache Cathe-Control：max-age=315360000

Expires有一个非常大的缺陷，它使用一个固定的时间，要求服务器与客户端的时钟保持严格的同步，并且这一天到来后，服务器还得重新设定新的时间。 HTTP1.1引入了Cathe-Control，它使用max-age指定组件被缓存多久，从请求开始在max-age时间内浏览器使用缓存，之外的使用请求，这样就可以消除Expires的限制， 如果对浏览器兼容性要求很高的话，可以两个都使用。

Pragma：no-cache

2. 精确获取页面元素位置的方式有哪些

那就是使用getBoundingClientRect()方法。它返回一个对象，其中包含了left、right、top、bottom四个属性，分别对应了该元素的左上角和右下角相对于浏览器窗口（viewport）左上角的距离

```js
var X= this.getBoundingClientRect().left;
var Y =this.getBoundingClientRect().top;
//再加上滚动距离，就可以得到绝对位置
var X= this.getBoundingClientRect().left+document.documentElement.scrollLeft;
var Y =this.getBoundingClientRect().top+document.documentElement.scrollTop;

```

3. 正则表达式

eg: .正则从2018-10-07T11:48:47 Asia/zh-cn 提取出来结果[2018,10,07,11,48,47]

"2018-10-07T11:48:47 Asia/zh-cn".match( /\d{1,}/g )

4. 如何判断object是数组类型

```js
alert(typeof 1);                // 返回字符串"number" 
alert(typeof "1");              // 返回字符串"string" 
alert(typeof true);             // 返回字符串"boolean" 
alert(typeof {});               // 返回字符串"object" 
alert(typeof []);               // 返回字符串"object " 
alert(typeof function(){});     // 返回字符串"function" 
alert(typeof null);             // 返回字符串"object" 
alert(typeof undefined);        // 返回字符串"undefined"
```

其中，typeof {}和typeof []的结果都是object，那么问题来了，我怎么通过typeof去判断一个对象是不是数组类型呢？

对象是对象，数组也是对象，js中万物皆对象，很显然，通过简单的typeof运算符是不能够达到目的，我们得换个方法。

1、从原型入手，Array.prototype.isPrototypeOf(obj);

利用isPrototypeOf()方法，判定Array是不是在obj的原型链中，如果是，则返回true,否则false。

2.Array.isArray()方法。

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```


https://zhuanlan.zhihu.com/p/114278057

https://xz-fe-interview.gitbook.io/fe-interview/vue/~/settings/customization