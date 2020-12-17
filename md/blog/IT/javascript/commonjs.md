### CommonJs

`CommonJs`是一种 `JavaScript` 语言的模块化规范，它通常会在服务端的 `Nodejs` 上使用。项目是由多个模块组成的，模块和模块之间的调用，需要各个模块有相同规范的 API，这样一来在使用的过程中不会有那么多的学习成本，并且对于单个模块来说是类聚的

在 `CommonJs` 的模块化规范中，每一个文件就是一个模块，拥有自己独立的作用域、变量、以及方法等，对其他的模块都不可见。`CommonJS`规范规定，每个模块内部，`module` 变量代表当前模块。这个变量是一个对象，它的 `exports` 属性（`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的 `module.exports` 属性。`require` 方法用于加载模块。

```js
module.exports = {
  b1: '111',
  b2: '222',
  b3: '333',
};

module.exports.b1 = '111';
module.exports.b2 = '222';
module.exports.b3 = '333';

exports.b1 = '111';
exports.b2 = '222';
exports.b3 = '333';

```

这三种方式的效果是一样的，导出的内容都是

```js
{
	b1: '111',
	b2: '222',
	b3: '333',
}
```

但是像下面这样写并不会和上面一样导出相同的对象，下面这段代码只是将对象赋值给了exports变量

```js
exports = {
	b1: '111',
	b2: '222',
	b3: '333',
};
```

新建一个文件夹commons，在文件夹下使用npm init -y初始化项目，创建a.js文件，在a.js中引入b.js文件。在b.js中分别放入以上几段代码，在a.js中引入b.js

```js
const b = require('./b.js');
console.log(b);
```

1.CommonJS 的优点在于： 
代码可复用于 Node.js 环境下井运行，例如做同构应用：通过 Npm 发布的很多第三方模块都采用了 CommonJS 规范。 

2.CommonJS 的缺点在于: 
这样的代码无法直接运行在浏览器环境下，必须通过工具转换 成标准的 ES5。 
CommonJS 还可以细分为 CommonJSl 和 CommonJS2，区别在于 CommonJSl 只能通过 exports . XX = XX 的方式导出，而 CommonJS2 在 CommonJSl 的基础上加入了 module.exports = XX 的导出方式。 CommonJS 通常指 CommonJS2。 

> 模块化规范给项目带来极大的好处，在业务复杂，模块众多的大型项目中，开发者都遵循相同的规则来开发各自的模块，他们通过规范来约束模块的定义，大家不需要太多的沟通或者大量的文档来说明自己的模块使用规则，成千上万的模块就这样生产，并能够容易的使用。它的意义不仅是让模块看起来很规范，在合作开发、社区中传播中也起到了重大的作用。

