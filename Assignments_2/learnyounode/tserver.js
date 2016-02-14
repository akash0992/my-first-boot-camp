
function pad(n) { return n < 10 ? '0' + n : n }

var net = require('net');
net.createServer(function (socket){
	var date = new Date();
	var date = date.getFullYear() + "-"
    + pad(date.getMonth() + 1) + "-"
    + pad(date.getDate()) + " "
    + pad(date.getHours()) + ":"
    + pad(date.getMinutes()) + "\n";
	socket.end(date);
}).listen(process.argv[2]);




/*


  var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
   
*/