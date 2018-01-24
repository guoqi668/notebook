# 介绍
## table-cell布局 [This link](http://example.net/)
- 对大小不固定元素垂直居中
- 两列自适应布局
- 等高布局
## flex布局 [This link](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### flex容器属性
- ```flex-direction: row | row-reverse | column | column-reverse;``` 主轴方向

- ```flex-wrap: nowrap | wrap | wrap-reverse;```  如果一条轴线排不下，如何换行

- ```flex-flow``` 上面两个属性```flex-wrap```和```flex-direction```的简写

- ```justify-content: flex-start | flex-end | center | space-between | space-around;``` 项目在主轴上的对齐方式

- ```align-items: flex-start | flex-end | center | baseline | stretch;``` 项目在交叉轴上如何对齐

- ```align-content``` 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

#### 项目属性
- ```order``` 定义项目的排列顺序。数值越小，排列越靠前，默认为0

- ```flex-grow``` 定义项目的放大比例，默认为0.如果所有项目的flex-grow属性都为1，则它们将等分剩余空间

- ```flex-shrink``` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小.一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
 
- ```flex-basis: length|auto``` 在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小

- ```flex```是```flex-grow```, ```flex-shrink``` 和 ```flex-basis```的简写，默认值为0 1 auto

- ```align-self: auto | flex-start | flex-end | center | baseline | stretch;``` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的```align-items```属性，如果没有父元素，则等同于stretch
