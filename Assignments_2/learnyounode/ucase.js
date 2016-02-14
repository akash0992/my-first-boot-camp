/*
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(8001)

*/


var http = require('http');

http.createServer(function (request, response) {
	
	if (request.method != 'POST') {
          return response.end('send me a POST\n');
	}
	
	var map = require('through2-map');
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
}).listen(process.argv[2]);