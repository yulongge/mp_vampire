### react基础面试

(1) React的请求应该放在哪个生命周期中?

React的异步请求到底应该放在哪个生命周期里,有人认为在componentWillMount中可以提前进行异步请求,避免白屏,其实这个观点是有问题的.
由于JavaScript中异步事件的性质，当您启动API调用时，浏览器会在此期间返回执行其他工作。当React渲染一个组件时，它不会等待componentWillMount它完成任何事情 - React继续前进并继续render,没有办法“暂停”渲染以等待数据到达。
而且在componentWillMount请求会有一系列潜在的问题,首先,在服务器渲染时,如果在 componentWillMount 里获取数据，fetch data会执行两次，一次在服务端一次在客户端，这造成了多余的请求,其次,在React 16进行React Fiber重写后,componentWillMount可能在一次渲染中多次调用.
目前官方推荐的异步请求是在componentDidmount中进行.
如果有特殊需求需要提前请求,也可以在特殊情况下在constructor中请求:

react 17之后componentWillMount会被废弃,仅仅保留UNSAFE_componentWillMount

(2) setState到底是异步还是同步?

先给出答案: 有时表现出异步,有时表现出同步

setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。
setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。

(3) React组件通信如何实现?

React组件间通信方式:

父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
子组件向父组件通讯: props+回调的方式,父组件向子组件传递props进行通讯，此props为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
跨层级通信: Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言,对于跨越多层的全局数据通过Context通信再适合不过
发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入event模块进行通信
全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并根据不同的事件产生新的状态


(4) React有哪些优化性能是手段?

(5) fiber
https://www.jianshu.com/p/86366581163d/