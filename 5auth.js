var express=require('express');
var app=express();
/*
* 中间件
* */
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/plain;charset=utf8');
    //console.log(req.url);//请求的url
    //console.log(req.path);//pathname  /food
    // console.log(req.query);//查询字符串对象

    var query=req.query;
 if(query.username&&query.username=='admin'){
     next();
 }else{
     res.end('没权限')
 }
})
app.get('/',function(req,res){
    res.end('welcome')
})
app.listen(8080);
