
var http = require('http');

http.createServer(function (request, response) {
	var fs = require('fs');
	fs.createReadStream(process.argv[3]).pipe(response);
}).listen(process.argv[2]);


/*
  var http = require('http')  
     var fs = require('fs')  
       
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  


*/
