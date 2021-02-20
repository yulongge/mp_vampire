### 面试题一份

#### Webpack

1. webpack 常见性能优化

- webpack 优化构建速度（可用于生产）
        优化 babel-loader
        IgnorePlugin
        noParse
        happyPack
        ParallelUgligyPlugin

- webpack 优化构建速度（不可用于生产）
    自动刷新
    热更新
    DllPlugin

- webpack 优化产出代码
    小图片 base64 编码
    bundle 加 hash
    懒加载
    提取公共代码
    使用 CDN 加速
    IgnorePlugin
    使用 Production
    Scope Hosting

2. babel-runtime 和 babel-polyfill 的区别


    babel-polyfill 会污染全局
    babel-runtime 不会污染全局
    产出第三方 lib 要用 babel-runtime


#### Vue

1. Vue 常见性能优化方式

- 合理使用v-show 和 v-if
- 合理使用computed
- v-for 时要加key，以及避免和 v-if 同时使用
- 自定义事件、DOM 事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深（因为深度监听一次性监听到底）
- 使用 vue-loader 在开发环境做模板编译（预编译）
- webpack层面的优化
- 前端通用的性能优化，如果图片懒加载
- 使用 SSR

2. 为什么使用服务器端渲染SSR

- https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F

3. computed 有何特点，computed 和 watch，methods 的区别

- computed： 有缓存，data 不变不会重新计算；提高性能。
- computed 为什么需要缓存？简单说就是可以提高性能。假设我们有一个性能开销比较大的计算属性A,它需要遍历一个巨大的数组做大量的计算，然后我们可能有其他的属性依赖于A，如果没有缓存，将不可避免的多次执行A 的getter，如果不希望有缓存请用方法代替
- computed 和 methods的区别: computed 计算属性是基于它的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值，这意味着只要原属性还没发生改变，多次访问相关属性，计算属性会立即返回之前的计算结果，而不必再次执行函数；而 methods 每当触发重新渲染时，调用方法总会再次执行函数
- computed 和 watch的区别：computed 默认只要 getter，不过需要时也可以提供 setter；watch 侦听器，当需要在数据变化时执行异步或开销较大的操作时，watch是最有用的，使用 watch选项允许执行异步操作（访问一个API）,限制我们执行该操作的频率，并在得到最终结果前，设置中间状态，这些都是计算属性无法做到的

- computed 是属性
1.当需要根据已有数据产生一些派生数据的时候，可使用计算属性
2.注意：计算属性不支持异步操作，因为计算属性一般要绑定到模板中
3.更重要的一点是：计算属性会缓存调用的结果，提高性能
4.计算属性必须有返回值，没有返回值就没有意义
- watch 是一个功能：
1.watch不需要返回值，根据某个数据变化执行xx逻辑
1.watch可以执行异步操作

4. 对MVVM的理解？

5. Vue实现数据双向绑定的原理

6. vue等单页面应用及其优缺点

#### React


1. 何为高阶组件

    高阶组件是一个以组件为参数并返回一个新组件的函数。HOC 运行你重用代码、逻辑和引导抽象。最常见的可能是 Redux 的 connect 函数。除了简单分享工具库和简单的组合，HOC 最好的方式是共享 React 组件之间的行为。如果你发现你在不同的地方写了大量代码来做同一件事时，就应该考虑将代码重构为可重用的 HOC

    你能用HOC做什么 ？

    代码重用，逻辑和引导抽象
    渲染劫持
    状态抽象和控制
    Props 控制

2. (在构造函数中)调用 super(props) 的目的是什么

    在 super() 被调用之前，子类是不能使用 this 的，在 ES2015 中，子类必须在 constructor 中调用 super()。传递 props 给 super() 的原因则是便于(在子类中)能在 constructor 访问 this.props。

3. 区分Real DOM和Virtual DOM

    | Real DOM | Virtual DOM |
    | :----:| :----: | 
    | 更新缓慢 | 更新更快 | 
    | 可以直接更新 HTML | 无法直接更新 HTML | 
    | 如果元素更新，则创建新DOM | 如果元素更新，则更新 JSX | 
    | DOM操作代价很高 | DOM 操作非常简单 | 
    | 消耗的内存较多。 | 很少的内存消耗。 | 

4. 区分有状态和无状态组件	

    | 有状态组件 | 无状态组件 |
    | :----:| :----: | 
    | 在内存中存储有关组件状态变化的信息 | 计算组件的内部的状态 | 
    | 有权改变状态 | 无权改变状态 | 
    | 包含过去、现在和未来可能的状态变化情况 | 不包含过去，现在和未来可能发生的状态变化情况 | 
    | 接受无状态组件状态变化要求的通知，然后将 props 发送给他们 | 从有状态组件接收 props 并将其视为回调函数 | 

5. React中的合成事件是什么

    合成事件是围绕浏览器原生事件充当跨浏览器包装器的对象。它们将不同浏览器的行为合并为一个 API。这样做是为了确保事件在不同浏览器中显示一致的属性

6. react中setState是异步还是同步？

   


#### nodejs

1. Node.js 是单线程还是多线程

    第一个问题，Node.js 是单线程还是多线程？这个问题是个基本的问题，在以往面试中偶尔提到还是有不知道的，Javascript 是单线程的，但是做为其在服务端运行环境的 Node.js 并非是单线程的。

    第二个问题，Javascript 为什么是单线程？这个问题需要从浏览器说起，在浏览器环境中对于 DOM 的操作，试想如果多个线程来对同一个 DOM 操作是不是就乱了呢，那也就意味着对于DOM的操作只能是单线程，避免 DOM 渲染冲突。在浏览器环境中 UI 渲染线程和 JS 执行引擎是互斥的，一方在执行时都会导致另一方被挂起，这是由 JS 引擎所决定的。

#### http

1. 常见的http状态码

2. Xss 跨站脚本注入

    将cookie等敏感信息设置为httponly，禁止Javascript通过document.cookie获得
    对所有的输入做严格的校验尤其是在服务器端，过滤掉任何不合法的输入，比如手机号必须是数字，通常可以采用正则表达式
    净化和过滤掉不必要的html标签，比如<ifr·ame>, alt,<script>等
    净化和过滤掉不必要的Javascript的事件标签，比如：onclick, onfocus等
    转义单引号，双引号，尖括号等特殊字符，可以采用htmlencode编码 或者过滤掉这些特殊字符
    设置浏览器的安全设置来防范典型的XSS注入