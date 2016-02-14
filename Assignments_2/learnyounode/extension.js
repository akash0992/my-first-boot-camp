
var fs = require('fs');

var rs = fs.readdir(process.argv[2],function (error,list){

		list.forEach(function(ele,i){

				
				 if((ele.substring(ele.lastIndexOf(".")+1)==process.argv[3])&&(ele.lastIndexOf(".")!=-1))
				 	console.log(ele);


		});


});


/*

var fs = require('fs')  
     var path = require('path')  
       
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
       })  
     })  



*/