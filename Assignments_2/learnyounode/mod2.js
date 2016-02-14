
var mymodule = require('./mod.js') ;


mymodule(process.argv[2],process.argv[3],function(err,data){

	if(err){
		console.log(err);
		return;
	}
	data.forEach(function(ele){
			
			console.log(ele);
	});
});