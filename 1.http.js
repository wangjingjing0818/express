/*
* 编写一个http的服务
* 当客户端访问 /  时，显示首页
*    /login  显示登录
*    其他路径，显示此页面不存在
* */
/*
*1 如果路由多，代码多，难以阅读和修改
* 2如果以后修改，耦合的到吗太多导致修改可能引入新的bug
*
* */
var http=require('http');

function requestListener(req,res){
    //如果没有请求？key=value  可以用url判断  url=pathname
    var url=req.url;
    if(url=='/'){
        res.end('首页')
    }else if(url=='/login'){
        res.end('登录')
    }else{
        res.end('页面不存在')
    }

}
//通过http模块创建一个服务器，等待客户端链接，当客户端连接上的时候，会执行请求监听函数来处理客户端的请求
var server=http.createServer(requestListener);
server.listen(8080)