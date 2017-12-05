/*
* express 是什么，是一个快速开发框架*/
//导入express模块
var express=require('express');
//调用express方法返回app
var app=express()
//如果在express中定义路由 路由：配置服务器根据不同的客户端请求返回不同的相应
app.get('/',function(req,res){// 当客户端以get 方法访问路由的时候，会交由对应的回调函数来处理
    res.end('shouye')
})
app.get('/login',function(req,res){
    res.end('登录')
})
//all表示匹配所有的方法名，*代表所有的路径
app.all('*',function(req,res){
    res.end('页面不存在')
})

//监听8080端口
app.listen(8080);