var express=require('express');
var url=require('url')
var app=express();
/*
* 中间件
* */
//使用中间件  中间件本质也是一个函数
//next也是一个函数，调用它表示向下继续执行
//路由一般都会放在中间件的后面
/*
 * 中间件的作用
 * 1.添加公共的处理逻辑
 * 2.给请求或相应对象上增加公用的方法和属性  req.path
 * */
app.use(function(req,res,next){

    res.setHeader('Content-Type','text/plain;charset=utf8');
    next();
})

app.get('/signup',function(req,res){

    res.end('注册')
})
app.get('/signin',function(req,res){
    res.end('登录')
})
app.listen(8080);