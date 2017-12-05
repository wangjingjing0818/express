var express=require('express');
var app=express();
//学习任何获取请求参数
/*app.get('/food',function(req,res){
    //http://localhost:8080/food?price=10&amount=1
    console.log(req.method);//请求的方法
    console.log(req.url);//请求的url
    console.log(req.path);//pathname  /food
    console.log(req.query);//查询字符串对象
    console.log(req.headers);//请求头对象
    res.end('food');
})*/

app.get('/article/:id',function(req,res){
    //  :id  占位符
    //   /article/795251
    var id=req.params.id;
    //req.params={id:795251}
    res.end(id)
})
app.get('/users/:id',function(req,res){
    //http://localhost:8080/food?price=10&amount=1
    var id=req.params.id;
    //console.log(req.method);//请求的方法
    //console.log(req.url);//请求的url
    //console.log(req.path);//pathname  /food
   // console.log(req.query);//查询字符串对象
   // console.log(req.headers.host);//请求头对象
    var values=req.headers.host.split(':');
    console.log(values[0])
    console.log(values[1]||80)
    //console.log(id)
    console.log(req.headers)
    res.end('food');
})


app.listen(8080)