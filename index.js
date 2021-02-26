// use an existing node-module: the 'http-module' by using 'require'
var http = require('http');
var dt=require('./datetimemodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: "+ dt.myDateTime())
    res.end('<br>Hello World!');
}).listen(8080);

