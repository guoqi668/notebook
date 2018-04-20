var http = require('http');
var fs = require('fs');
// 引入查询字符串模块
var qs = require('querystring');
var server = http.createServer(function(req,res){
    var url = req.url;
    if(url == '/form.html' && req.method == 'GET') {
        fs.readFile('./public/form.html',function(err,data) {
            res.end(data);
        })
    }

    // 执行登录的时候
    if( url="/doform" && req.method == "POST" ) {
        // 获取表单参数信息 data 开始
        var param ="";
        req.addListener('data', function(chunk){
            param+=chunk;
        })
        // 输出参数 end 结束
        req.addListener('end', function(){
            // 解析 url参数
            tmp = qs.parse(param);
            console.log(param);
            res.end('ok');

        })

        // 安装 formdiable   解析 form data格式的插件  和 mysql
    }
})
server.listen(8080);