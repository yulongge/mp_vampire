#### 会议沟通

> 2020年10月19号会议  

##### 小程序优化

> 需要与林总沟通

一. 需求问题：做法，配料，备注，完全独立功能

(1). 做法及备注限999个：取消999個限制 

> 收银的设置吧

(2).  临时菜 修改代入 默认 值，不是清空

> 临时菜?

(3).  1.2 级菜单管理 = 点餐可以在類別中點1級菜類，再選2級菜類，才是品項，加速大量品項廣式中餐點菜(Linked Group)
扫码点餐的 Linked Group 以及版面

> 菜类分等级？

二. 针对服务器预警：优化相应接口

```sh

LogStore: nginxlog
Trigger: wxdc超3s

[pv:3,request_uri:/superdiancan/index]
[pv:6,request_uri:/superdiancan/login]
[pv:189,request_uri:/superdiancan/queryTable] 
[pv:54,request_uri:/superdiancan/checkOrder] 
[pv:28,request_uri:/superdiancan/placeOrder] 
[pv:5,request_uri:/api/orderPay] 
[pv:4,request_uri:/api/synchrodataDish]
[pv:2,request_uri:/api/orderPay]
[pv:4,request_uri:/superdiancan/pay/discount/16030872981883]
```



1. 标版

![](https://yulongge.github.io/images/acewill/meeting1.png)

2. OMP版

先付：



后付：
![](https://yulongge.github.io/images/acewill/meeting1_1.png)


三. 汇付卡包问题

> listuserbyunionid 汇付查询卡列表接口时间都在8s以上

> 比如：主商户1559585913 有187个子商户，要尝试每个子商户下查找有没有这个unionid对应的会员

解决方法：

重新设计unionid到子商户的索引，不要跨报表，用单表索引，定时任务维护全量的汇付用户索引。


四. 后端lavaral架构开头
