var express=require('express');
var app=express();
app.get('/signup',function(req,res){
    res.end('注册')
})
app.get('/signin',function(req,res){
    res.end('登录')
})
app.get('/signout',function(req,res){
    res.end('退出')
})
app.get('*',function(req,res){
    res.end('你访问的路径不存在')
})

app.listen(8080)
