/*
* 1，当客户端 GET方式访问  /signup的时候，服务器返回一个注册表单
* 2，客户端填写完成后提交到赴俄乌漆（post  /signup）, 服务器得到次请求体对象并保存到数组，并跳转到登录也（get  /signin）
* 3,客户端填写登录表单并提交到服务器（post /signin） 服务器得到次请求体对象后检验用户名和密码是否正确，如果正确跳到欢迎页 /welcome，如果不正确跳会登录页*/

var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var path=require('path');
var app=express();

app.set('view engine','html');
app.set('views',path.resolve('views'))
app.engine('html',require('ejs').__express);
app.use(bodyParser.urlencoded({extended:true}));
app.get('/signup',function(req,res){
    res.render('signup',{title:'注册'});
});
    var obj=[];
app.post('/signup',function(req,res){
    /*writeBook(req.body,function(){
       JSON.stringify(req.body);
        res.redirect('/signup')
    })*/
    if(obj.length==0){
        obj.push(req.body);
        console.log(obj);
        res.redirect('/signup')
    }else{
        var a=obj.find(function(item){
            console.log(item)
          return req.body ==item;
        })
        console.log(a);
        if(a){
            app.get('/welcome',function(req,res){
                res.end('welcome')
            });
        }else{
            res.redirect('/signup')
        }
    }
})










app.listen(8080);