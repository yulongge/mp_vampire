### flex布局——`space-between(around)`

> 最后一行不能左对齐的解决方案

分为两种情况，分别是三列及三列以上的解决办法

1、三列时（图为借鉴的，懒得自己画）

![three](https://img-blog.csdnimg.cn/20190520215443162.png)

要实现为

![](https://img-blog.csdnimg.cn/20190520215542288.png)

```html
<view class="rules">
	<view class="rules-item" v-for="(item, index) in rules" :key="index">
		<view class="msg">
			<text>item</text>
			<text>giveMoney</text>
		</view>	
	</view>
</view>
```
```css
.rules {
	display:flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.rules:after{
	content:' ';
	width:32%; //这个宽度和子元素宽度一致
	height:0;
	display:block;
}
.rules .rules-item{
	width:32%;
}
```

2. 三列以上时如下（图为借鉴）

![](https://img-blog.csdnimg.cn/20190520220321908.png)

实现为：

![](https://img-blog.csdnimg.cn/20190520220334604.png)


```css
.rules {
	display:flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.rules:after{
	content:' ';
    flex:auto;
}
.rules .rules-item{
	margin-right:0.55rem;
	width: -webkit-calc((100% - 0.55rem*4)/ 4);
	width: calc((100% - 0.55rem*4)/ 4); 
}
```

> calc() 函数用于动态计算长度值。
需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
任何长度值都可以使用calc()函数进行计算； calc()函数支持 “+”, “-”, “*”, “/” 运算；
calc()函数使用标准的数学运算优先级规则； 支持版本：CSS3

> 动态尺寸：calc((100% - padding * padding的数量 - margin * margin的数量 - border * border的数量) / 列数)， 没有边距就不减