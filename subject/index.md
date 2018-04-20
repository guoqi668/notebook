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
    事件捕获
        当你使用事件捕获时，父级元素先触发，子级元素后触发，即div先触发，p后触发。

    事件冒泡
        当你使用事件冒泡时，子级元素先触发，父级元素后触发，即p先触发，div后触发。
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

## BOM 浏览器对象模型
常用的就是window对象和location。  location.host location.protocol
navigator中有很多浏览器相关的内容，通常判断浏览器类型都是通过这个对象。 navigator.userAgent

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

##ajax步骤
1.1.创建一个Ajax对象
    非IE6浏览器:var oAjax=new XMLHttpRequest();
    IE6浏览器:var oAjax=new ActiveXObject("Microsoft.XMLHTTP");

2.连接到服务器
    oAjax.open(方法,文件名,异步传输);
3.发送请求
    oAjax.send();

4.接收返回值
请求状态监控:onreadystatechange事件:当自己的Ajax与服务器之间有通讯时触发
    主要通过readyState属性来判断结束没有,结束了也并没有代表成功,status属性来判断

```
oAjax.onreadystatechange=function(){
  　//oAjax.readyState: 表示浏览器和服务器之间进行到哪一步了
 　 if(oAjax.readyState==4){  //读取完成
    　if(oAjax.status==200){  //读取的结果是成功
      　alert('成功:'+oAjax.responseText);
   　 }
  　}
　}
```


>其他问题

- Promise 有哪些状态 resolve、reject、pending），resolve 和 reject 返回什么？
Promise 是异步编程的一种解决方案.他是一个对象，可以实现链式的写法来实现同步异步操作
* 般来说链式的话resolve返回值为一个promise对象// 所谓promise对象, 其实不过是 {then: function() {} }
- 说说 async 和 await 
* es7标准引入了 async 函数，使得异步操作变得更加方便。他可以让我们更加优雅的写出代码，而替代then()的写法.它就是 Generator 函数的语法糖。async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await

- this的问题
this 永远指向最后调用它的那个对象
- 怎么改变this的指向？
* 使用 ES6 的箭头函数 => 箭头函数的 this 始终指向函数定义时的 this，而非执行时
* 在函数内部使用 _this = this
*使用 apply、call、bind. 
调用的函数.call(this的指向，数组）b.call(a,[1,2]) 
bind 是创建一个新的函数，我们必须要手动去调用  b.bind(a,1,2)() 


- export default 是什么意思，做了什么。
- Git 熟不熟，说说 merge 和 rebase。

##angular
- AngularJS 的组件生命周期。

##react
- react思想
- react需要注意的地方
    setState（）是异步的。
    setState 会造成不必要渲染。所以 和渲染无关的状态尽量不要放在 state 中来管理.这个问题通常可以通过  shouldComponentUpdate(nextProps, nextState) return false 来解决

    只有部分周期可以调用setState()方法:componentWillMount componentDidMount componentWillReceiveProps

- React 的组件生命周期。

    * componentWillMount
        在完成首次渲染之前调用，此时仍可以修改组件的state。一般异步请求放在这里
    * componentDidMount.
        真实的DOM被渲染出来后调用
    * componentWillReceiveProps 组件接收到新的props时调用，并将其作为参数nextProps使用。此时可以更改组件props及state。
        ```
        componentWillReceiveProps: function(nextProps) {
            if (nextProps.bool) {
                this.setState({
                    bool: true
                });
            }
        }
        ```
    * shouldComponentUpdate
    组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，可通过该方法进行适当的优化。

    * componentWillUpdate
        接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

    * componentDidUpdate
    完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

    * componentWillUnmount
    组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。

    * render
        必选的方法，创建虚拟DOM，该方法具有特殊的规则：

        只能通过this.props和this.state访问数据
        可以返回null、false或任何React组件
        只能出现一个顶级组件（不能返回数组）
        不能改变组件的状态
        不能修改DOM的输出

- Redux 流程图

- setState是异步还是同步，如果要一个set完马上set另一个，这种异步链式怎么做
    异步的；setstate方法中的第二个参数为会回调函数，或者 promise 进行封装。
- react项目怎么引入sass，less
    model modle文件夹 index.js  index.less import style from 'index.less'; style对象 classname = {style.class1}
- redux，常用中间件，比如saga
    redux-thunk 和 redux-saga 是 redux 应用中最常用的两种异步流处理方式
    saga是一个中间件，单独redux是不能在action中执行异步请求的，需要借助这个中间件
- 说说react怎么更新虚拟dom的，用了redux会有性能上的提高吗，为什么
    当数据变化时，react会将新的虚拟dom和旧的虚拟dom进行对比，找到变化的部分，得出一个diff，然后将diff放到一个队列里，最终批量更新这些diff，并通过render函数将更改后的虚拟dom渲染到真实的dom上。
- 什么是虚拟dom？react为什么要使用虚拟dom
    是一个模拟dom树的javascript对象。因为直接操作dom会慢 因为上面挂着很过东西。
- 单独react.js不能构建复杂项目，一般都是借助redux或者其他中间件

- 什么是dom树？

    一旦浏览器接收到一个HTML文件，渲染引擎就开始解析它，并根据HTML元素（elements）一一对应地生成DOM 节点（nodes），组成一棵DOM树。
- 父子传值
    

    子给父传值：子组件传入父组件的方法，在子组件中调用

##Redux
视图与状态是一一对应的。

- Store
    * 所有的状态，保存在一个对象里面。Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
    * createStore这个函数，用来生成 Store。

- State
    * Store对象包含所有数据,可以通过store.getState()拿到。
- Action
    * Action 就是 View 发出的通知，表示 State 应该要发生变化了.也是改变 State 的唯一办法。它会运送数据到 Store。
    * 那么如何触发action呢？(dispatch) 如何改变state呢？（reducer）
    * Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置. 
- store.dispatch()
    * 是View发出Action的唯一方法。接受一个 object 发送给 reducer 
- Reducer
    * reducer就是纯函数，接收state 和 action，然后返回一个新的 state.
- combineReducer(reducers)  
    * 一个项目有很多的reducers,我们要把他们整合到一起. 就用到这个函数
    * 把一个 object，（object是由多个不同 reducer 函数作为 value 的对象）合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。


- Recux-thunk
redux的中间件.中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
* 为了让action创建函数除了返回action对象外，还可以返回函数.我们需要引用redux-thunk，函数传递两个参数(dispatch,getState).

##React-redux 

- Connect
    * connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到propsvar
    * connect接收两个参数，一个mapStateToProps,就是把redux的state，转为组件的Props，还有一个参数是mapDispatchToprops, 就是把发射actions的方法，转为Props属性函数。
- Provider
    * Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。

##dva
- dva 中的 dynamic 解决组件动态加载问题。
- Model
    model有 namespace， state，reducers：用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。
    effects：用于处理异步操作和业务逻辑，不直接修改 state，可以触发 action.
        put用于触发 action 。call 用于调用异步逻辑，支持 promise . select 用于从 state 里获取数据。
    subscriptions 用于订阅一个数据源，然后根据需要 dispatch 相应的 action


##http

- 从输入url到按回车的时候发生了什么？
    1.dns解析 （寻找哪台机器上有你需要资源）
    2. 建立TCP连接 
    3.发送http请求
    4. 服务器处理这个请求然后返回http报文
    5. 浏览器解析渲染页面
    5. 服务器关闭连接

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

- http协议的主要特点
 无连接 （连接之后就会断开，不会保持连接）
 无状态 服务端不能记着上一次连接的信息，
- http 报文的组成
    请求报文（请求行 请求头 空行 请求体）
    响应报文 （ 状态行 响应头 空行 响应体 ）
- http 1.1 支持持久连接
- get post 
    get传输长度有限， get会把传输内容暴露在url里面。ge请求参数会被保存在浏览历史记录里面
- 设置缓存 catch control max mage 
- requst header里面 的东西

# 原型链
 - 每个对象都有个__proto属性，指向构造函数的原型对象，这个原型对象也有 __proto__属性，这样一层一层的向上找 知道找到 Object.prototype.__proto__ = null
 - 通过构造函数可以创建出实例，那每个构造函数都有一个prototype属性这个属性的值是空对象也就是原型对象，可以挂所有实例都需要的属性（声明一个函数就自动增加的）
    原型对象怎么区分出是被哪个构造函数引用的呢？原型对象上有个constroctor属性指向这个构造函数。 实例有个__proto属性 指向原型对象

 - 创建对象的方法
    1. 字面量方式
        var o = {a: 'a'}
        var o = new Object({a:'a'})
    2.构造函数创建
    2.通过Object.create方法
        var o = {a: 'a'}
        var o = Object.create(p)

 - 跨域出来
     jsonp、
     html5增加了postMessage、
     cors ( fetch方法 支持跨域通信的ajax 在http头中加个 origin字段)、
     websocket
 - 安全
    csrf 跨站请求伪造。 通过：token验证、
    xss 跨域攻击
 - 渲染机制
    浏览器渲染过程：
    重排 reflow: 当页面上的改变影响了文档内容、结构或者元素定位时，就会发生重排
    重绘 repaint:  当在页面上修改了一些不需要改变定位的样式的时候（比如background-color,border-color,visibility)，浏览器只会将新的样式重新绘制给元素
 -  页面性能提升
    资源压缩合并 减少http请求
    异步加载
    利用浏览器缓存 
        强缓存  响应头头中有两个字段 expires（过期时间，服务器的时间） cache-control cache-control:max-age=3600. 
        协商缓存                  Last-Modifies If-Modified-Since(上次缓存的时间)  Etag 
 - 前后端如何通信 ajax websocket cors 
 - 高性能css
    压缩css,把公用的css写在配置文件中，避免多次写。避免css表达式;避免通配选择器
 - dom渲染优化
    避免造成重排：批量修改DOM。预先定义好css的class，然后修改DOM的className； 事件委托
 - 继承
 - 原型链继承的优点和缺点
 - 闭包
 Javascript的变量分为全局变量和局部变量。函数内部可以直接读取全局变量。在函数外部自然无法读取函数内的局部变量。出于种种原因，我们有时候需要得到函数内的局部变量。我们可以在函数的内部，再定义一个函数，然后return出来就可以了。闭包就是能够读取其他函数内部变量的函数。闭包可以理解成“定义在一个函数内部的函数“

 - rem 相对文档跟元素 htmlfont-size
 - 浏览器常见兼容问题
    css
    1.不同浏览器的默认样式存在差异。可以定制属于自己业务的 reset.css
    2.ie9 以下浏览器对 html5 新增标签不识别的问题 html5shiv.js
    3.ie9 以下浏览器不支持 CSS3 Media Query 的问题 respond.js
    4. 浏览器 CSS 兼容前缀 -o // Opera；-ms// IE；-moz// Firefox；-webkit// Chrome
    js
        阻止冒泡的方式:e.stopPropgation()  e.cancelBubble=true ;
        阻止默认事件 e.preventDefault()  e.returnValue='false';
 - 活动页缓存 

- 房地产网站 包含全球国家房源 看房型展示 新闻 资讯 登录注册 技术站老 因为 对第一版升级重构 用jquery 写的 es6优化。  
kss-node。把静态的放 cdn上 。 资源从cdn上请求快： 2.向服务器发的字段比较少 （cookie是服务器产生的，没发过去，请求报文少了很多东西）， 服务器上传慢 下来的快。我 wepack 1 wepack 3 升级到 webpak1 3 。做到后面的时候空闲 e2e， 项目规范，任务分配，大家员工沟通，github 钩子 jira，slack 触发不署命令，travis 代码上的检查 ，
2. cdn是就近的。


##es6
- 变量的解构赋值
    * 完全解构 不完全解构 解构不成功（变量为undefined）
    * 解构赋值允许指定默认值，当一个数组成员严格等于undefined，默认值才生效
用途：
1.变量交换。
2.从函数返回多个值。 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
3.解构赋值对提取 JSON 对象中的数据，尤其有用

- 块级作用域 let const
- 动态字符串
- 使用扩展运算符（...）拷贝数组
- 箭头函数
- class  A 相当于构造函数 里面的方法相当于 绑定在原型对象上的公用方法，constructor里面放着属于自己的东西
- promise
- async await
- Object.assgin 
    * 将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    * 只能深拷贝第一层, 深层的还是浅拷贝


##vue与react对比
相同：都使用了虚拟dom； 都鼓励组件化应用；React和Vue都有很好的Chrome扩展工具去帮助你找出bug；
    配套框架 vue-router和vuex，而React react-router和react-redux
不同：React与Vue最大的不同是模板的编写。
    Vue鼓励你去写近似常规HTML的模板；React推荐你所有的模板通用JSX书写。JSX只是JavaScript混合着XML语法，
link:http://caibaojian.com/vue-vs-react.html

##Vue

    
- vue的优点
    * 比较轻量而且官方文档很清晰
    * 
- mvvm和 mvc

- vue双绑原理
    基于Object.defineProperty()方法来对数据的读写进行处理.
    * 父向子传值
        子组件在props中创建一个属性，用以接收父组件传过来的值
        父组件中注册子组件
        在子组件标签中添加子组件props中创建的属性
        把需要传给子组件的值赋给该属性
    * 子向父传值
        子组件用 $emit 发射自定义事件,并携带要传递给父组件的值。
        在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法
- vue生命周期
    * beforeCreate
        数据还没有监听,也没有挂载DOM对象
    * created
        数据已经绑定到了对象实例，但是还没有挂载对象
    * beforeMount
        此时是给vue实例对象添加$el成员 （$el属性是一个HTMLElement对象），并且挂载DOM元素。
    * mounted
    在mounted之前元素中还是通过{{message}}进行占位的，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。
    * beforeUpdate
    * updated
        当vue发现data中的数据发生了改变，会触发对应组件的重新渲染，在beforeUpdate可以监听到data的变化但是view层没有被重新渲染。等到updated的时候 view层才被重新渲染，数据更新先后调用beforeUpdate和updated钩子函数
    * beforeDestroy
    * destroyed
        beforeDestroy钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。
        destroyed钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

- Computed 计算属性。它是基于他们的依赖进行缓存的，只有相关依赖发生改变时才会重新求值。
    Computed VS methods  只要发生重新渲染，method 调用总会执行函数。
- 说说执行上下文
- 闭包


    应用场景:setTimeOUt
- 浏览器缓存原理和相关http头

-AMD和CMD是什么？它们的区别有哪些？
- 多行省略号显示

## postcss
 - PostCSS 是目前流行的一个对 CSS 进行处理的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。PostCSS 的主要功能是把 CSS 解析成 JavaScript 可以操作的 抽象语法树结构（代码语法结构的树状表示） AST，然后调用插件来处理 AST 来得到结果。
 - PostCSS 一般不单独使用，而是与已有的构建工具进行集成。Webpack 中使用 postcss-loader 来执行插件处理.有个post.config.js配置文件，可以配置需要的插件。
 - 常用插件 Autoprefixer
  作用是为 CSS 中的属性添加浏览器特定的前缀。还可以配置需要支持的浏览器。如“last 2 versions”表示主流浏览器的最近两个版本
- postcss-assets 图像处理插件
    * 通过给定的文件名，知道到合法的路径来替换 resolve(image);
    * 在 CSS 声明中，可以使用 width、height 和 size 方法来获取到图片的宽度、高度和尺寸
    * 可以使用 inline 方法把图片转换成 Base64 编码的 data url 的格式，这样可以减少对图片的 HTTP 请求。
- css-mqpacker 媒体查询插件



