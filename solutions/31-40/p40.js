//d = 0.123456789101112131415161718192021...
//is created by concatenating 0,1,2,3,4,...11,12,13,...etc..

//	the 12th digit of d =1...
//	d(12) =	1
//	d(3) 	= 3
//	d(15) = 2

//What is d(1)*d(10)*d(100)*d(1000)*d(100000)*d(1000000)

//OUTLINE TO SOLUTION
//1. create a string "d" which concatenates each number
//2. multiply the product of d[1]*d[10]*etc..


//SOLUTION

//Start counting how long the process took
var start = new Date().getTime();

function solveP40(){
	var d ='';
	//Numbers grow in digits, so to check d(1MM), we do not need
	//1 million entries. Therefore we calculate only upto 200k as
	//an upper bound. We chose 200K by trial and error.
	for (var i=0; i < 200000; i++){
		d += i.toString();
	}
	console.log("solution: %s", d[1]*d[10]*d[100]*d[1000]*d[10000]*d[100000]*d[1000000]);
	return;
}

//CALLING THE FUNCTION
solveP40();

var end = new Date().getTime();
//solution took 115 milliseconds
console.log("Time to solve problem: %s milliseconds", end - start);


