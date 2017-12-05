/*
var express=require('express');
//Router是一个方法，通过调用它可以生成一个路由中间件的实例
//Router的用法和app很像，也可以定义路由
var router=express.Router();
router.get('/signup',function(req,res){
    res.end('注册')
})
router.get('/signin',function(req,res){
    res.end('登录')
})
router.get('/signout',function(req,res){
    res.end('退出')
})
module.exports=router;*/
var express=require('express');
var u=express.Router();
u.get('/signup',function(req,res){
    res.end('主页q')
})
module.exports=u;