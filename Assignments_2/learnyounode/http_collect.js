var http = require('http'),
    result = '';
 
http.get(process.argv[2], function (res) {
    res.on('data', function (data) {
        result += data.toString();
    });
    res.on('end', function () {
        console.log(result.length);
        console.log(result);
    });
});

/*   

   var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
   



*/
