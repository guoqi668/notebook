// 引入http模块
var http = require('http');
// 引入 ur 模块
var urlTool = require('url');
// 引入文件系统模块
var fs = require('fs');
// 创建服务
var server = http.createServer(function(req,res){
    // 获取请求路径
    var url = req.url;
    // 获取url参数   得到：?name=c&age=2;  传入true 就会得到json字符串：{ name: 'c' } 
    // var parma = urlTool.parse(url,true).query;
    // 设置响应码
    // res.statusCode=200;
    // // 设置响应头
    // res.setHeader('name','chrish');


    // 响应体 （返回响应数据）  1.返回字符串类型
    // res.write('hangzhou');
    // 2.返回页面数据  用`` 反引号包含页面
    // res.write(``);
    //  3.返回 json字符串   把json对象转换为json字符串:1. JSON.stringify() 或者 ``
     
    // res.write(JSON.stringify({name:'admin','age':'12'}));
    
    // 请求静态资源
    // if(url=="/css/css.css") {
    //     fs.readFile("./css/css.css",'utf8',function(err,data){
    //         if(err){
    //             console.log('err');
    //             res.end(err);
    //         }else{
    //             console.log(data)
    //             res.end(data);
    //         }
    //         // res.end(data);
    //     })
    // }
    // 
    if(url=="/"){
        console.log('//')
        fs.readFile('./public/1.html',function(err,data){
                res.end(data);
        })
    }
    else {
        p = './public'+url;
        fs.readFile(p,function(err,data){
            console.log('css');
            res.end(data);
        })
    }
    // 结束
    // res.end();
});
server.listen(8080);