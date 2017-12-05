/*
* 静态文件中间件
* 中间件函数
* 提供静态文件服务器
* */
var fs=require('fs');
var express=require('express');
var path=require('path');
var app=express();
//参数是静态文件根目录,找到public
//app.use(express.static(path.join(__dirname,'public')))
//app.use(express.static(path.resolve('public')))
/*
* 此中间件会常会去静态文件根目录下找，如果找到返回
* 如果找不到，next向下执行看看下面有没有路由能处理
* */
/*app.get('/basketball',function(req,res){
    fs.createReadStream('./public/images/zp4.jpg').pipe(res)

})*/
/*function static(root){
    return function(req,res,next){
        //用静态文件根目录+客户端请求路径
      var filename=  path.join(root,req.path);
      fs.exists(filename,function(exists){
          if(exists){
              res.sendFile(filename)
          }else{
              next();
          }
      })

    }
}*/
app.use(express.static(path.join(__dirname,'public')))




app.get('/welcome',function(req,res){
    res.send('welcome')
})

app.listen(8080);