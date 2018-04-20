// 1.引入express框架
var express = require('express');
var fs = require('fs');
var urlTool = require('url');
var formidable = require('formidable');
// 引入查询字符串模块
var qs = require('querystring');
// 导入cookie-parser  对cookie进行检查获取
var cookieParser = require('cookie-parser');
// session实现
var expressSession = require('express-session')

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'qi940905',
    database: 'cherigh',
    charset: 'utf8'
})
connection.connect();

// 2.创建应用
var app = express();
// 3.设置静态资源服务
app.use(express.static('node_modules'));
// 设置模板引擎类型
app.set('view engine','ejs');
// 设置模板存放路径
app.set('views','./view');
// 使用cookie-parser
app.use(cookieParser());
// 设置路由
app.get('/login',function(req,res){
    // 加载登录模板
    res.render('login');
})
// 点击登录
app.post('/dologin',function(req,res){
     // 设置字符集  不然中文会乱码
    res.setHeader('content-type','text/html;charset=utf-8');
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var name = fields.name;
        var pass = fields.pass;
        connection.query('select * from users where name="'+ name +'"',function(err,result,fields){
            if(err) throw err;
            if(result.length<=0) {
                res.redirect('login');
            }else{
                // 密码检查
               if(pass == result[0].password) {
                // 把用户信息存在cookie中  httpOnly代表只有在发请求的时候才会存储
                res.cookie('name', name, { maxAge: 90000, httpOnly: true });
                res.redirect('/index');
               }else {
                    // res.render('login');
                    res.redirect('/login');
               }
            }
        })
    })
   
    // mysql.query('select ')
    // 返回json格式的响应数据
})
// 首页路由
app.get('/index',function(req,res){
    // 对cookie做判断，不存在则不能访问首页. 用 req对象获取cookie
    if(!req.cookies.name) {
        res.redirect('/login');
    }
    res.redirect('/user');
    // 返回json格式的响应数据
    // res.json({data1:'登录成功'});
})

// 数据列表
app.get('/user',function(req, res){
    // 查询数据
    connection.query('select * from users',function(error,results,fields){
        // 加载模板并分配数据
        res.render('user',{user:results});
        res.end('ok');
    })
})

// 添加
app.get('/add',function(req,res){
    res.render('add');
    // res.end('ok');
})

// 执行添加
app.post('/doadd',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        // console.log(files);
        // 获取需要插入的用户和密码
        var name = fields.name;
        var pass = fields.pass;

        // 先查询有没有 防止重复添加
        connection.query('select * from users where name = "'+name+'" ',function(err,results,fields){
            if(results.length>0) {
                console.log('aaa')
               res.end('用户名已被注册');
            }else {
                // 预处理的用法 可提高运行速度
                // （1）准备sql语句
                var sql = 'insert into users (name,password)values(?,?)';
                // （2）绑定值 一一和占位符绑定
                var inserts = [name,pass];
                // 返回预处理
                insertSql = mysql.format(sql,inserts);
                // 执行sql语句 插入数据
                connection.query(insertSql, function(err,results,fields){
                    if(err) throw err;
                    // 如果受影响行数大于1 证明插入成功
                    if(results.affectedRows>0){
                        res.redirect("/user");
                    }else{
                        res.redirect("/add");
                    }
                })
            }
        })
    })
})

// 删除操作  操作动态网页
app.get('/delete/:id',function(req,res){
    // 获取id  req.param
    var id = req.params.id;
    console.log(id);
    var sql = 'delete from users where id=?';
    var deletes=[id];
    var deletesSql = mysql.format(sql,deletes);
    connection.query(deletesSql,function(err,results,fields){
        if(results.affectedRows>0){
            res.redirect('/user');
        }
    })
    // res.end('ok');
})

// 修改操作
app.get('/update',function(req,res){
    var url = req.url;
    var parma = urlTool.parse(url,true).query;
    connection.query("update users set name='"+parma.newV+"' where id="+ parma.id,function(err,result,fields){
        if (err) throw err;
        if(result.affectedRows>0) {
            res.json({'mesg':'ok','status':1});
        }
    })
    console.log(parma);
})
app.listen(8080);