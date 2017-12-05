var express=require('express');
var path=require('path');
var app=express();
var users=[
    {id:1,name:'zf'},
    {id:2,name:'zf2'},
    {id:3,name:'zf3'}
];
//设置模板引擎
app.set('view engine','html');

//设置模板存放根目录
app.set('views',path.resolve('views'))
//如果模板的后缀是html，用ejs的渲染方式来进行渲染
app.engine('html',require('ejs').__express);

app.get('/users',function(req,res){
    //如果有多个模板都会用到同一个变量值，而且变量值也一样，就可以写在中间件里
    res.locals.title='你猜'//真正渲染的时候，会把数据对象的属性前部拷贝到 res.locals 上真正渲染模板
    /*
    * 第一个参数是模板的相对路径，相对于模板存放的根目录
    * 第二个参数是数据对象，数据对象的属性可以作为模板里的js变量
    * 真正渲染的时候，会把数据对象的属性前部拷贝到 res.locals 上真正渲染模板*/

    //res.render('user',{users:users,title:'用户管理'})//渲染
    res.render('user',{users:users})
})
app.listen(8080);