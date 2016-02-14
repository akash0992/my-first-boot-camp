/*
var http = require('http');
var bl = require('bl');

var result = [];
var urls = process.argv.slice(2);

urls.forEach(function(url, i) {

  http.get(url, function(response) {

    response.pipe(bl(function(err, data) {

      if (err) return console.error(err);
     
      result[i] = data.toString();

      /*if (i === urls.length - 1) {
        console.log(result.join('\n'));
*./

if (result.filter(function(res) 
	{ return res !== undefined; }).length === urls.length) 
{ //log results when all urls have returned responses 
	console.log(result.join('\n')); 

}

      

    }));

  });

});

*/


var http = require('http');
var bl = require('bl');
var responses = new Array();
var count = 0;

for(var i = 0; i < process.argv.length - 2; i++) {
	printer(i);
	
}

function printer(index) {
	http.get(process.argv[i + 2], function(response) {
			response.pipe(bl(function(err, data){
				responses[index] = data.toString();
				count++;
				if(count == 3) {
					for(var k = 0; k < responses.length; k++) {
						console.log(responses[k]);
					}
				}
			}));
		});
}
