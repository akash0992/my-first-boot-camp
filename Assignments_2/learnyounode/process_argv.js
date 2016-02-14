var args = process.argv.slice(2);
var sum =0;
var arr =args.slice(',');
sum=arr.reduce(function(prev,curr,curr_index,array){
	return ((+prev)+(+curr));
});

console.log(sum);


/*

   
     var result = 0  
       
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i])  
       
     console.log(result)  
   



*/
