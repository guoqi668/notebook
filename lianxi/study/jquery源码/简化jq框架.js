/**
 * Created by cherish on 2017/2/9.
 */
//匿名函数自执行  1.变量局部防止与其他方法冲突
//对外提供接口方法: 挂在到window.$=$
(function(){
    (21,94)定义了一些变量和函数  jQuery=function(){};

    (96,283) 给JQuery对象添加一些方法和属性;

    (285,347) extend: JQ的继承方法;

    (349,817) jQuery.extend() 扩展一些工具方法

    (877,2856) Sizzle:复杂选择器的实现

    (2880,3042) Callbacks: 回调对象: 对函数的统一管理

    (3043,3183) Defferd: 延迟对象: 对异步的统一管理

    (3184,3295) support: 功能检测:

    (3308,3652) data() : 数据缓存;

    (3653,3797) queue(): 队列管理 用处:运动效果

    (3803,4299) attr() prop() val() addClass()等 :对元素属性的操作

    (4300,5128) on() trigger():时间操作的相关方法

    (5140,6057) DOM操作: 添加 删除 获取 包装 DOM筛选

    (6058,6620) css(): 样式的操作

    (6621,7854) 提交的数据和ajax();ajax() load() getJson()

    (7855,8584) animate(): 运动的方法

    (8584,8792) offset() scrollTop(): 位置和尺寸的方法

    (8804,8821) JQuery支持模块化的模式

    (8826) window.jQuey=window.$=jQuery;这样在外面就可以通过 $ 或者JQuery 找到了
})();