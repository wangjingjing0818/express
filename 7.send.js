var express=require('express');
const STATUS_CODES=require('_http_server').STATUS_CODES;
var app=express();
var users=[
    {id:1,name:'zf'},
    {id:2,name:'zf2'}
];
app.use(function(req,res,next){
    res.send=function(params){
        var type=typeof params;
        switch (type){
            case 'object':
                params=JSON.stringify(params);
                break;
            case 'number':
                res.statusCode=params;
                params=STATUS_CODES[params];
                break;

        }
        res.end(params);//
    }
    next()
})

app.get('/users',function(req,res){
    res.send(users)
});
app.get('*',function(req,res){
    res.send(404)
});
app.listen(8080)