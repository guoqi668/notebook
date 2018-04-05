#html
> 写出左右两侧定宽，中间自适应的布局方式

- 浮动 
左右浮动，中间不动

- 绝对定位
全都绝对定位

- flex布局
父级display:flex;中间子级：flex-grow:1;
- 网格布局
- table-cell
父级display:table;子级：display:table-cell;


> 写出元素上下垂直居中的方法

- flex布局 
（父：display:flex;align-items: center;justify-content:center;）
- 使用绝对定位和transform 
(position:absolute;transform:translate(-50%,-50%))

- 绝对定位结合margin: auto 
(子：poistion:absolut;width:200px;height:200px;left:0;right:0;top:0;bottom:0;margin:auto;)
- 如果是单行文字或者图片 可以用Line-height

> 垂直居中

display: table-cell; vertical-aligin:middle;

## table-cell布局 [This link](http://example.net/)
- 对大小不固定元素垂直居中
- 两列自适应布局
- 等高布局

## flex布局 [This link](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

##### flex容器属性
- ```flex-direction: row | row-reverse | column | column-reverse;``` 主轴方向

- ```flex-wrap: nowrap | wrap | wrap-reverse;```  如果一条轴线排不下，如何换行

- ```flex-flow``` 上面两个属性```flex-wrap```和```flex-direction```的简写

- ```justify-content: flex-start | flex-end | center | space-between | space-around;``` 项目在主轴上的对齐方式

- ```align-items: flex-start | flex-end | center | baseline | stretch;``` 项目在交叉轴上如何对齐

- ```align-content``` 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

##### 项目属性
- ```order``` 定义项目的排列顺序。数值越小，排列越靠前，默认为0

- ```flex-grow``` 定义项目的放大比例，默认为0.如果所有项目的flex-grow属性都为1，则它们将等分剩余空间

- ```flex-shrink``` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小.一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
 
- ```flex-basis: length|auto``` 在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小

- ```flex```是```flex-grow```, ```flex-shrink``` 和 ```flex-basis```的简写，默认值为0 1 auto

- ```align-self: auto | flex-start | flex-end | center | baseline | stretch;``` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的```align-items```属性，如果没有父元素，则等同于stretch


## 网格布局 [This link](https://www.w3cplus.com/css3/line-base-placement-layout.html)



##DOM事件

- ####DOM事件模型

    ##### DOM事件模型分为两类

    -- 事件冒泡和事件捕获
    <small>*IE采用的是事件冒泡的形式。*</small>


    阻止事件冒泡
    ```
    e = e || window.event;
    if (e.stopPropagation) {       
        e.stopPropagation(); 
    }else {            
        e.cancelBubble = true; 
    }
    ```

    阻止事件的默认行为
    - 在W3c中，使用preventDefault（）方法；
    - 在IE下设置window.event.returnValue = false;

    ##### DOM事件模型分为三个等级

    -- DOM0 
    ```
    element.onclick=function(){}
    ```
    -- DOM2
    ```
    element.addEventListenger('click',function(){},false) //如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用

    ```
    -- DOM3
    ```
    element.addEventListener('keyup',function(){},false) //增加了鼠标事件 键盘等
    ```

- ####DOM事件流的三个阶段和过程
1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段

    事件流：从页面中接收事件的顺序。也就是说当一个事件产生时，这个事件的传播过程，就是事件流。

    在W3C模型中，任何事件发生时，先从顶层开始进行事件捕获，直到事件触发到达了事件源元素。然后，再从事件源往上进行事件冒泡，直到到达document

    window->document->html->body

- ####事件代理（事件委托）
就是利用事件冒泡的原理
- ####Event对象的常见应用
```
event.preventDefault();
event.stopPropagation();
event.currentTarget;//返回绑定事件的元素
event.target;//返回触发事件的元素
```


#css

###盒模型
content+padding+border+margin



- IE模型和标准模型两种盒模型的区别

>区别在于宽和高的计算方式不同。 标准模型宽度和高度不包括 border和 padding

#####css如何设置这两种模型
```
box-sizing: content-box;  //默认 标准模式
box-sizing: border-box; // IE模型
```

#####js如何获取盒模型对应的宽和高

```
dom.style.width/height; // 只能获取行内的宽高；
dom.currentStyle.width/height; // 只对ie有效；
window.getComputedStyle(dom).width/height; //主流浏览器；
```

#####根据盒模型解释边距重叠
>边界重叠是指两个或多个盒子的相邻边界重合在一起而形成一个单一边界

内层元素 加float:left;或display:inline-block;
外层元素 overflow:hidden;

```
#sec {
    background-color: green;
    /*解决父子元素边距重叠*/
    overflow: hidden/auto; 
}
.child {
    height: 100px;
    background-color: red;
    margin-top: 10px;
}

 <section id="sec">
        <article class="child">
            
        </article>
    </section>
```
为什么加overflow:hidden;就能解决？是因为创建了BFC
#####BFC（边距重叠解决方案）
- 概念：
- BFC原理：
- 如何创建BFC：

#####清除浮动方式
- 通过overflow属性清除浮动 （创建一个bfc元素）
- 添加空元素
- 完美方式 使用伪元素来清除浮动
.clearfix:after{
   content:”\200B”; 
    display:block; 
    height:0; 
    clear:both;
}
.clearfix {*zoom:1;}



#js
> js的几种数据类型

object{ Function,Array,Date } undefined  Null Number  Boolean


- typeof 
typeof方法返回一个字符串，来表示数据的类型。 typeof对基本类型和函数对象很方便，但是其他类型就没办法了。(Array Date)
- instanceof
用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性 （a instanceof Array）


> js的原型

- prototype
当一个函数 (注意：不仅仅只有构造函数) 创建好之后，都会有一个 prototype 属性，这个属性的值是一个对象，我们把这个对象，称为原型对象
- constructor
constructor 表示生成该实例对象的构造函数。
但是实例对象是不存在 constructor 属性的，这个属性被保存在了原型对象中。
- _proto_属性:
同一个函数造出来的实例对象能共享这个函数的prototype下的方法和属性，但是它是如何做到的呢？这里要出场的就是_proto_属性.
每个实例化对象都有_proto_属性，它是一个指针，指向构造函数的prototype。
所以总得来说，每个实例化对象都有_proto_属性，保存了构造函数的原型对象的地址，通过这个属性就可以拥有原型对象下的所有属性和方法，_proto_属性实际就是实例化对象和原型对象之间的连接
```
function Count(fn,arr) {
  
}
var c = new Count();
console.log(typeof Count)
console.log(Count.prototype.constructor==c.constructor); //证明了 实例对象的constructor 继承于 构造函数的原型对象
console.log(c.__proto__ == Count.prototype) //实例对象的__proto__ 指向该构造函数的原型对象
console.log(Count.__proto__ == Function.prototype)
console.log(Function.__proto__ == Function.prototype)
console.log(Object.__proto__ == Function.prototype)
console.log(Object.prototype.__proto__ == null)


console.log(Count.prototype.__proto__ == Object.prototype)
```



## new 关键字实例化一个对象发生了什么
- 创建一个新对象，创建一个新的内存空间
- 新对象的_proto_属性指向构造函数的原型对象
- 新对象的_proto_属性指向构造函数的原型对象
- 执行构造函数内部的代码
- 返回新对象

> 改变this的指向

- call和apply都是用来改变this的指向，不同的是call传递给函数的参数形式是列举出来的，apply是数组的形式

> H5的几种存储方式

###cookie
- 是客户端用来存储数据的一种选项，它既可以在客户端设置也可以在服务器端设置。cookie会跟随任意HTTP请求一起发送。cookie 所以对于那种设置“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在cookie中，其他类型的数据就不适合了.
- cookie也可以设置过期的时间，如果不设置，cookie默认是临时存储的，当浏览器关闭进程的时候自动销毁。

- cookie的存储是以域名形式进行区分的，不同的域下存储的cookie是独立的。我们可以设置cookie生效的域（当前设置cookie所在域的子域），也就是说，我们能够操作的cookie是当前域以及当前域下的所有子域.
- domain 和 path 这两个选项共同决定了cookie能被哪些页面共享。

优点：兼容性好

缺点：一是增加了网络流量；二则是它的数据容量有限，最多只能存储4KB的数据，浏览器之间各有不同；三是不安全。




###localStorage
- H5标准中加入的新技术，仅在客户端保存 大部分浏览器都支持（IE8+），永久存储，存储大小5MB

###sessionStorage
- 暂时存储，页面或者浏览器关闭就会被销毁. IE不支持


##数组常用的方法
- ```arr.join(separator)``` 把数组中的所有元素拼接成字符串
- ```arr.map(callback)``` 返回处理过的新数组
- ```arr.filter(callback)``` 返回一个新的通过测试的元素的集合的数组
- ```arr.find(callback)```返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

- ```arr.includes(searchEle,fromIndex)```判断一个数组是否包含某个值，返回true false.
- ```Array.isArray(arr)``` 判断传递的值是否是数组
- ```arr.push(v); arr.pop();``` 
- ```arr.unshift(v)``` 将一个或者多个元素添加到数组的开头。返回数组的长度
- ```arr.shift()```。从数组开头删除第一个元素.返回这个元素
- ```arr.reverse()```数组反转
- ```arr.sort()``` 数组排序
- ```arr.slice(start,end)```返回浅拷贝的新数组。不改变原数组
- ```arr.splice(start,deleCount,item1,item2,...)``` 删除现有元素或添加新元素。 返回删除元素组成的新数组。改变原数组
- ```arr.indexOf(v)``` 找元素的索引。没有返回-1.

## 数组和和对象的深拷贝
- 数组的深拷贝
* for 循环 push
* slice方法  ```arr2=arr.slice(arr)```
* contact方法 ```arr2=arr.contact()```
* es6扩展运算符 ```var [...arr2] = arr```
- 对象的深拷贝
* for in 循环
* 转为json 再转为对象 ```obj2=JSON.pare(JSON.stringify(obj))```  可实现多维对象的深拷贝
* es6扩展运算符 ```var {...obj2} = obj```
* object.assign

##http
- 完整的一次Http通信
* 建立TCP请求
* 浏览器向服务器发送请求命令
* 发送请求头信息
* 服务器应答
* 服务器发送响应头信息
* 服务器向浏览器发送数据
* 服务器关闭TCP连接

TCP协议对应于传输层，而HTTP协议对应于应用层，从本质上来说，二者没有可比性。Http协议是建立在TCP协议基础之上的，当浏览器需要从服务器获取网页数据的时候，会发出一次Http请求。Http会通过TCP建立起一个到服务器的连接通道，当本次请求需要的数据完毕后，Http会立即将TCP连接断开，这个过程是很短的。所以Http连接是一种短连接，是一种无状态的连接。
- 状态码
1xx：指示信息--表示请求已接收，继续处理。
2xx：成功--表示请求已被成功接收、理解、接受。
3xx：重定向--要完成请求必须进行更进一步的操作。
4xx：客户端错误--请求有语法错误或请求无法实现。
5xx：服务器端错误--服务器未能实现合法的请求。

200 OK：客户端请求成功。400 Bad Request：客户端请求有语法错误，不能被服务器所理解。
401 Unauthorized：请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用。
403 Forbidden：服务器收到请求，但是拒绝提供服务。
404 Not Found：请求资源不存在，举个例子：输入了错误的URL。
500 Internal Server  Error：服务器发生不可预期的错误。
503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常，举个例子：HTTP/1.1 200 OK（CRLF）。

302 302重定向是临时的重定向
301 301重定向是永久的重定向

##讲一讲你在日常web开发中加载和交互体验上常用的优化策略

- 减少HTTP请求数
- 资源合并与压缩
- 合并CSS图片，减少请求数的又一个好办法。
- 图片懒加载
- 按需加载

##请写出一些前端性能优化的方式，越多越好
1.减少dom操作
2.部署前，图片压缩，代码压缩
3.优化js代码结构，减少冗余代码
4.减少http请求，合理设置 HTTP缓存
5.使用内容分发cdn加速
6.静态资源缓存
7.图片延迟加载
## 常见的浏览器内核有哪些？

- Trident内核：IE,360，傲游，搜狗，世界之窗，腾讯等。[又称MSHTML]
- Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
- Webkit内核：Safari,Chrome等。 [ Chrome的：Blink（WebKit的分支）]
- Presto内核：Opera7及以上。 [Opera内核原为：Presto，现为：Blink;]

## 为什么利用多个域名来存储网站资源？
破浏览器并发限制 
节约cookie带宽 ，节约主域名的连接数，优化页面响应速度 防止不必要的安全问题


##常见的浏览器兼容问题？
- 图片默认有间距 （display:block;float:left）

##H5新特性
- 新的元素创建更好的页面结构：
* article aside header footer  section nav time
- canvas绘图
- 地理定位
- cookie sessionStorage localStorage
- audio video

##Css3新特性
- 复杂的选择器
- 弹性布局
- 盒模型
- 媒体查询
- 过度  ```transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)```
- 动画 1
*

```animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）  @keyframes定义一个动画```
- 圆角 阴影 渐变 形状转换

##spa应用
优点：用户体验好 、良好的前后端分离。
缺点：
1.不利于SEO。
2.初次加载耗时相对增多。
3.导航不可用，如果一定要导航需要自行实现前进、后退。

## export、export default、module.exports
- ES6标准发布后，module成为标准，标准的使用是以export指令导出接口，以import引入模块，
- 但是在我们一贯的node模块中，我们采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口。




>其他问题

- Promise 有哪些状态 resolve、reject、pending），resolve 和 reject 返回什么？
- 说说 await 和 async
- export default 是什么意思，做了什么。
- Git 熟不熟，说说 merge 和 rebase。

- AngularJS 的组件生命周期。
- react思想
- React 的组件声明周期。
- Redux 流程图
- vue双绑原理

- 说说执行上下文
- 闭包
- 浏览器缓存原理和相关http头

-AMD和CMD是什么？它们的区别有哪些？
- 多行省略号显示


