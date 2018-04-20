var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mysql = require('mysql');
var server = http.createServer(function(req,res){
    var url = req.url;
    if(url == '/upload.html' && req.method == 'GET') {
        fs.readFile('./public/upload.html',function(err,data) {
            res.end(data);
        })
    }

    // 上传图片
    if( url == "/doupload" && req.method == "POST" ) {
        // 实例化
        var form = new formidable.IncomingForm();
        // 设置上传路径
        form.uploadDir = "./upload";
        // 保持后缀
        form.keepExtensions = true;
        form.parse(req,function(err,fields,files){
            // 在服务端输出上传的信息
            console.log(fields);
            console.log(files);
            res.end('ok');
        })
    }

    // 连接数据库
    if( req.method == "GET"  && url == '/mysql' ) {
        // 数据库的配置
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'qi940905',
            database: 'cherigh'
        });
        // 连接数据库
        connection.connect();
        connection.query('select * from users',function(err,result,fields){
            if(err) throw err;
            console.log('结果：',result);
            res.end('ok');
        })
        // 关闭数据库
        connection.end();

    }
})
server.listen(8080);