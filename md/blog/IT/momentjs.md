### Moment.js 宣布停止开发

> Moment.js 宣布停止开发，进入维护状态

![moment](https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/moment/moment_1.png)

作为一个诞生于 2011 年的元老级明星项目，以现在的眼光来看 Moment.js 并非完美无缺，官方总结了两大问题

1. 可变对象
Moment 对象是可变对象（mutable），简单点说，任何时间上的加减等计算都改变了其本身。这种设计让代码变的十分不可控，而且很容易带来各种隐蔽且难以调试的 bug。以至于我们在每步修改之前，都要先调用 .clone 克隆一次才能放心操作。
2. 包体积过大
因为 Momnet.js 将全部的功能和所有支持的语言都打到一个包里，包的大小也是到了 280.9 kB 这样一个夸张的数字，而且对于 Tree shaking 无效。如果要使用时区相关的功能，包体积更是有 467.6 kB 的大小。简单点说，我们可能只需要一个 .format 格式化时间的方法，用户就需要加载数百 kB 的库，这是十分不划算的。

最新版本的 Chrome 开发者工具也开始建议用户更换 Moment.js 为同类更小的

![moment](https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/moment/moment_1.png)

#### 官方给了 3 种替代方案

1. 不使用库
对于一些简单的时间处理需求，其实 JavaScript 自带的 Date 和 Intl 对象完全可以满足。强大的 Intl 对象可以展示不同时区不同语言的时间日期格式，在多数现代浏览器上已经有很好的支持。

2. Temporal
也许今后的某一天，我们再也不需要使用任何库，被看作是未来的全新内置的时间日期方案 Temporal 很值得期待。这是一个 JS 语言内置的重新设计的时间和日期 API，现在可以通过实验性的 polyfill 来尝试 Temporal，但离生产上大规模可用还有很长的路要走。

3. 其他替代库
官方推荐了 Luxon，Day.js，date-fns 等更先进设计更优秀的时间日期库。相比之下可能 Day.js 是最值得尝试的一个。


### 参考

- https://momentjs.com/docs/#/-project-status/
- https://juejin.im/post/6873268471329898509?utm_source=gold_browser_extension