/*
var express=require('express');
var app=express();
var user=require('./routes/user');
var article=require('./routes/article')
/!*
* 用户  /users/signup  /users/singnin   /users/signout
* 文章  /article/add   /article/list*!/
// 当请求的的URL路径时以/user开头的话，会交由user中间件来处理

app.use('/user',user);
app.use('/article',article);

app.listen(8080);
*/
var express=require('express');
var app=express();
var user=require('./routes/user');
var article=require('./routes/article')
app.use('/user',user);
app.use('/article',article);
app.listen(8080);