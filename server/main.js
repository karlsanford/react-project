var express = require('express');
var app = new express();
var path = require('path');

var rootPath = path.normalize(__dirname + '/../' );

app.set('view engine', 'ejs');
app.set('views',rootPath + '/app');
app.get('/',function(req,res){
    //res.send('hello json');
    res.render('index.ejs',{});
});

app.use(express.static(rootPath + '/app'))

app.listen(7777,function(){
    console.log('listening on port 7777');
});