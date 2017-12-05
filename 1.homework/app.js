var express=require('express');
var cookieParser=require('cookie-parser');
//所有的中间件都会返回一个函数，调用次函数才会得到你想的中间件函数
var app=express();
var path=require('path');
var users=[];
var bodyParser=require("body-parser")
//当请求体的格式是urlencoded格式的话，用此中间件来讲请求体转成对象
// url  encoded  url 里面只能放ascii,如果要传入中文，则需要将中文转成ascii；
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.set('view engine','html');//模板引擎
app.set('views',path.resolve('views'));//模板存放根目录
app.engine('html',require('ejs').__express);//渲染模板
app.get('/signup',function(req,res){
    var error=req.cookies.error;
    res.clearCookie('error');
    res.render('signup',{error:error});



});
app.post('/signup',function(req,res){
    var user=req.body;
    //找一下用户数组中有没有想同用户名
    var oldUser=users.find(function(item){
        return item.username==user.username;
    })
    //如果找到了同名的，调回注册页重新填写用户名
    if(oldUser){
        res.cookie('error','名被占用了');
        res.redirect('back');

    }else{
        //把新用户添加到数组，重定向到登录页
        users.push(user);
        res.redirect('/signin')
    }
})
app.get('/signin',function(req,res){
    var error=req.cookies.error;
    res.clearCookie(error);
    res.render('signin',{error:error});
})
app.post('/signin',function(req,res){
    var user=req.body;
    var oldUser=users.find(function(item){
        return user.username==item.username&&user.password==item.password
    });
    //如果有值表示找到了想应的用户；
    if(oldUser){
        res.cookie('username',user.username)
        res.redirect('/welcome')
    }else{
        res.cookie('error','用户名或密码不正确')
        res.redirect('back')
    }

})
app.get('/welcome',function(req,res){
    res.render('welcome',{username:req.cookies.username})
})
app.listen(8080);
