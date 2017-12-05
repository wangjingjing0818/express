var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
//使用bodyParser中间件，会向req增加body属性(请求体)
//得到请求体字符串，然后转成对象赋给req.body;
//true  querystring   false qs
app.use(bodyParser.urlencoded({extended:true}))
//根据请求体类型的不同，分有不同的bodyParser中间件来进行处理
app.use(bodyParser.json())
app.set('view engine','html');
app.set('views',path.resolve('views'))
app.engine('html',require('ejs').__express);
app.get('/signup',function(req,res){
    res.render('signup',{title:'注册'});
})
app.post('/signup',function(req,res){
        res.send(req.body)
    console.log(req.body);
})
app.listen(8080);
//res.redirect('/signin')重定向