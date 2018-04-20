// 1.引入express框架
var express = require('express');
var fs = require('fs');
// 2.创建应用
var app = express();
// 3.设置静态资源服务
app.use(express.static('public'));
// 4.设置路由
app.get('/login',function(req,res){
    // 返回响应数据
    res.redirect("/form.html");
    res.end('ok');
})

// 获取请求
app.get('/request',function(req,res){
    var url = req.url;
    console.log(url);
    res.end('ok');
})
// 响应
app.get('/response',function(req,res){
    // res.redirect('/login');

    // 返回json字符串
    res.json({'name':'admin'});
})
// 5. 监听端口
app.listen(8080);