//work out the first 10 digits of the sum of the 
//sum of the following one hundred 50-digit numbers

//brute force approach


var fs = require('fs');

var sum = 0;
var number ='';
var numberArr =[];

//place contents in a file
var file = fs.readFile('./digits13.txt', {encoding: 'utf8'}, function(err,data){

	//return array with whole file split by '\n'
	numberArr = data.split('\n');
	for (var i =0; i <numberArr.length; i++){
		sum = sum + parseInt(numberArr[i]);
	}
	console.log(sum);
	
});


