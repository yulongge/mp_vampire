### Vue是如何实现双向绑定的?

利用Object.defineProperty劫持对象的访问器,在属性值发生变化时我们可以获取变化,然后根据变化进行后续响应,在vue3.0中通过Proxy代理对象进行类似的操作

```js
// 这是将要被劫持的对象
const data = {
    name: '',
};

function say(name) {
    if (name === '古天乐') {
        console.log('给大家推荐一款超好玩的游戏');
    } else if (name === '渣渣辉') {
        console.log('戏我演过很多,可游戏我只玩贪玩懒月');
    } else {
        console.log('来做我的兄弟');
    }
}

// 遍历对象,对其属性值进行劫持
Object.keys(data).forEach(function(key) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            console.log('get');
        },
        set: function(newVal) {
            // 当属性值发生变化时我们可以进行额外操作
            console.log(`大家好,我系${newVal}`);
            say(newVal);
        },
    });
});

data.name = '渣渣辉';
//大家好,我系渣渣辉
//戏我演过很多,可游戏我只玩贪玩懒月
```
