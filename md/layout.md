# 介绍
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

##css盒模型

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
- 使用伪元素来清除浮动
- 添加空元素

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

##es6



