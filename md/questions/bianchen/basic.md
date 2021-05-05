#### 编程题

1.已知数据结构users，请实现语法支持user.unique能够按照name字段去重，并输出结构为：["a","b"]

```js
var users=[{
   id:1,name:"a"
},{
   id:2,name:"a"
},{
   id:3,name:"b"
},{
   id:4,name:"v"
}]
Array.prototype.unique = function () {
    var res;
    this.map(item => {
        this[item.id - 1] = item.name
    })
    console.log(this, 'this')
    // ES6里新添加了两个很好用的东西，set和Array.from
    // set是一种新的数据结构，它可以接收一个数组或者是类数组对象，自动去重其中的重复项目。
    res=new Set(this);
    console.log("new Set对象",res)
    // 但是这里大家可以看到，set返回的是一个对象，但是我们想要的是数组啊。
    // 这回，就该轮到Array.from出场了，它的作用，就是可以把类数组对象、可迭代对象转化为数组。
    res=Array.from(new Set(this));
    return  res//es6 数组去重
}
console.log(users.unique());
```


2.已知如下对象，请基于es6的proxy方法设计一个属性拦截读取操作的例子，要求实现去访问目标对象example中不存在的属性时，抛出错误：Property "$(property)" does not exist

```js
const man={
    name:'jscoder',
    age:22
}
 //补全代码
const proxy = new Proxy(...)
proxy.name //"jscoder"
proxy.age //22
proxy.location //Property "$(property)" does not exist
```
考点 es6 javascript的Proxy 实例的方法 ,get() get方法用于拦截某个属性的读取操作。

```js
var man = {
    name:'jscoder',
    age:22
};
var proxy = new Proxy(man, {
    get: function(target, property) {
        if(property in target) {
            return target[property];
        } else {
            throw new ReferenceError(`Property ${property} does not exist.`);
        }
    }
});
console.log(proxy.name)
console.log(proxy.age)
console.log(proxy.location)
```

3.给出如下虚拟dom的数据结构，如何实现简单的虚拟dom，渲染到目标dom树

```js
//样例数据
let demoNode = ({
    tagName: 'ul',
    props: {'class': 'list'},
    children: [
        ({tagName: 'li', children: ['douyin']}),
        ({tagName: 'li', children: ['toutiao']})
    ]
});
```

参考：https://zhuanlan.zhihu.com/p/83218377

