var express=require('express');
var app=express();
app.get("/",function(request,response)
{
    response.send('My first Api!');

});
app.listen(3000,function(){console.log("First API on port 3000");

});