/*
var express=require('express');
//Router是一个方法，通过调用它可以生成一个路由中间件的实例
//Router的用法和app很像，也可以定义路由
// /article/add   /article/list*!/
var a=express.Router();
a.get('/add',function(req,res){
    res.end('添加文章')
})
a.get('/list',function(req,res){
    res.end('列表')
})

module.exports=a;*/
var express=require('express');
var a=express.Router();
a.get('/add',function(req,res){
    res.end('添加文章')
})
module.exports=a;