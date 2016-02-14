module.exports = function (args,args2,callback) {

var fs = require('fs');
var data = [];

fs.readdir(args,function (err,list){
	
	if(err){
				return callback(err);
	}

		
	data = list.filter(function (ele) {
            	//if
            	return ((ele.substring(ele.lastIndexOf(".")+1)==args2)&&(ele.lastIndexOf(".")!=-1));// {
               // console.log("filter");
               // return ele;
           // }
        });
        return callback(null, data);
	});

} 

/*


_/opt/node-v4.1.2-linux-x64/lib/node_modules/learnyounode/exercises/make_i  
  t_modular/solution/solution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
   
 ─────────────────────────────────────────────────────────────────────────────  
  _/opt/node-v4.1.2-linux-x64/lib/node_modules/learnyounode/exercises/make_i  
  t_modular/solution/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
   



*/