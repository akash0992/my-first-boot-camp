var http = require('http');
 
http.get(process.argv[2], function (res) {
    res.on('data', function (data) {
        console.log(data.toString());
    });

res.on('error', function (err) {
        console.log(err);
    });

});



/*
   
     var http = require('http')  
       
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.log)  
     })  
   



*/
