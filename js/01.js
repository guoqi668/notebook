/**
 * Created by cherish on 2017/6/27.
 */
/*
* js的解析与执行： 预处理阶段 和 执行阶段
*
* 1. 全局的 预处理的是： 以声明方式创建的函数 和 用var定义的变量
*  function  XXX(){} 这就是声明的方式
*  var XXX=function(){} 这个是函数表达式
* 2. 全局的预处理阶段 会先扫描函数，后扫描变量；
*
*
* 3.函数的预处理： 先处理函数的参数，函数会把参数覆盖，变量var不会
*
 */



console.log(g)
var g= function () {
    console.log('a');
};

console.log(a);


console.log(a1); // a1是个函数
function a1(a,b) {
    alert(a); // a
    alert(b); // function b(){}
    var a = 100;
    var b= 3;
    function b() {
        return 1;
    }
    return true;
}
a1('a','b');
var a1= 2;



/*
* 1. 一个函数中想使用他之外的变量，可以把它定义为全局的，但是这样全局变量会越来越多；
* 这时候就用到闭包
*  闭包：立即执行函数是闭包的一种；
*
*  2.即便离开了他的创造环境也可以访问到他引用的自由变量
 */
// var a=4;
// (function(){
//     // var a = 5;
//     var b= 6;
//     function hello() {
//         a++;
//     }
//     hello();
//     console.log('a1'); //6
// })();

// 3. return 离开了创建闭包的环境
// function hi(){
//     var a = 5;
//     var b= 6;
//     return function hello() {
//         console.log('a'+a);
//     }
// }
// var result = hi()();

// var a=[];
// for(let i=1;i<=10;i++){
//     a[i]=function () {
//         console.log(i);
//     }
// }
// a[1]();
// // console.log(i);
// var a;
// 4. 父级函数每调用一次产生 不同的闭包
(function () {
     a=1;
    function get() {
        return a;
    }
    function set(el) {
        a =el;
    }
    window.g=get;
    window.s=set;
})()
s(12);
console.log(a);//  5. 闭包对捕获的变量是引用传递，不是值传递
console.log(g());

for(var i=1;i<=3;i++){
    var ele = document.getElementById(i);
    ele.onclick=(function (id) { // 不点击按钮也会立即执行
        console.log(id);// 1, 2 ,3
        return function () {
            alert(id);
        }
    })(i)
}


