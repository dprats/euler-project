//PROBLEM
//find all multiples of 3 or 5 under 1000
//add them up

//OUTLINE TO SOLUTION
// 1. iterate from 1 to 1000
// 2. for all numbers, check if its is both divisible by 3 OR 5

//SOLUTION

//Starting the clock to time the function
var start = new Date().getTime();

function solveP1(){
	var sum =0;
	for (var i = 1; i <1000; i++){
		//if i is multiple of 3 add it
		if (i % 3 === 0 || i %5 ==0){
			sum = sum +i;
		}
}
	return console.log("sum:%s",sum);
}

//CALL FUNCTION
solveP1();
var end = new Date().getTime();
//solution took 14 milliseconds.
console.log("Time to compute:%s milliseconds", end - start); 

