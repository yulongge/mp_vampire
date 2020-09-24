### immutable

> Immutable data encourages pure functions (data-in, data-out) and lends itself to much simpler application development and enabling techniques from functional programming such as lazy evaluation.

Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变

有人说 Immutable 可以给 React 应用带来数十倍的提升，也有人说 Immutable 的引入是近期 JavaScript 中伟大的发明，因为同期 React 太火，它的光芒被掩盖了。这些至少说明 Immutable 是很有价值的。

> 我们为什么需要不可更改是数据？


###### Mutable

JavaScript 中的对象一般是可变的（Mutable），因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象

> 除了基本的类型之外

```js
var obj = {
  a: 1,
  b: 2
};

var obj1 = obj;

obj1.a = 999;
obj.a //999
```

改变了obj1.a的值，同时也会更改到obj.a的值。这样共享的好处就是节省记忆体，坏处就是稍不注意会导致「改A坏B 」的棘手问题.

一般的解法就是使用「深拷贝」(deep copy)而非浅拷贝(shallow copy)，来避免被修改,但是这样造成了 CPU和内存的浪费.

> 对数组，对象，对象数组，进行简单的赋值运算只是创建了一份原有内容的引用，指向的任然是同一块内存区域，修改时会对应修改原内容，而有时候我们的需要独立，彼此互补影响，这就需要对他们进行深拷贝。

##### Immutable 可以很好地解决这些问题

### 什么是IMMUTABLE DATA

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

![immutable](https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/IT/immutable.gif)

### Immutable的优缺点一览

#### 优点

1.降低 Mutable 带来的复杂度

共享的可变状态是万恶之源，举个简单的例子就是js中的引用赋值

```js
var obj = { a: 1 };
var copy_obj = obj;
copy_obj.a = 2;
console.log(obj.a); // 2
```
引用赋值虽然可以节省内存，但当应用复杂之后，可变状态往往会变成噩梦，通常一般的做法是使用shallowCopy或者deepCopy来避免被修改，但这样造成了CPU和内存的消耗，不过Immulate可以很好地解决这些问题。

2.节省内存空间

上面提到了结构共享，Immutable.js 使用这种方式会尽量复用内存，甚至以前使用的对象也可以再次被复用。没有被引用的对象会被垃圾回收。

```js
import { Map } from 'immutable';
let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' })
})
let b = a.set('select', 'people');

a === b; // false
a.get('filter') === b.get('filter'); // true

```

上面 a 和 b 共享了没有变化的 filter 节点。

3.Undo/Redo，Copy/Paste，随意穿越！

因为每次数据都是不一样的，只要把这些数据放到一个数组里储存起来，想回退到哪里就拿出对应数据即可，很容易开发出撤销重做这种功能。

4.拥抱函数式编程

Immutable（持久化数据结构）本身就是函数式编程中的概念。函数式编程关心数据的映射，命令式编程关心解决问题的步骤，纯函数式编程比面向对象更适用于前端开发。因为只要输入一致，输出必然一致，这样开发的组件更易于调试和组装。

#### 缺点

> 抛开学习成本和额外引入的资源文件这些不说，我们来看看使用过程中有哪些不爽的地方。

1.容易与原生对象混

主要是Immutable的API设计的和原生对象类似，容易混淆操作。例如其中Map和List的操作：

```js
// Immutable
const map = Map({ a: 1, b: 2 });
const list = List([1,2,3]);

// 原生js
const obj = { a: 1, b: 2 };
const arry = [1,2,3];

// 取值方式对比
console.log(map.get('a'));
console.log(list.get(0));
console.log(obj.a);
console.log(arry[0]);
```

### API

下章内容....


### 总结

Immutable.js 所提供的 Immutable Data 和 JavaScript 固有的 Mutable Data 各有优势，未来 ECAMScript 有可能制定一套原生的 Immutable Data 规范，

在这之前，Immutable.js 是一个不错的选择。之前已经写文章熟悉过 Lodash 这一工具库，Immutable 内部也封装了诸多常用的数据操作函数，所以如果让我来选择的话，在 React 技术栈中我会更偏爱 Immutable。


### 参考资料

- http://facebook.github.io/immutable-js/docs/#/
- https://segmentfault.com/a/1190000010676878
- https://www.cnblogs.com/3body/p/6224010.html
- https://cythilya.github.io/2017/02/12/immutability-immutablejs-seamless-immutable/
- https://segmentfault.com/a/1190000005920644