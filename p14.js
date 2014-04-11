//collatz sequence:

// n/2 if n is even
// 3n+ 1 if n is odd



function collatz(start){
	var arr =[];
	//initialize
	arr.push(start);
	var number = start;

	while(number != 1){
		number = (number % 2 ==0)? (number/2):(3*number +1);
		arr.push(number);
	}

	return arr;
}

//brute force method

function generateC(limit){

	//start the timer
	var start = new Date().getTime();


	var chain = [];
	var num = 0;

	for (var i=1; i< limit; i++){
	
		//generate collatz for i
		collatz(i);
		//if the collatz(i)
	
	}

	//timing the function
	var end = new Date().getTime();
	console.log('Time to process:' +(end-start));
	return num;
}

// console.log(generateC(1000000));
console.log(collatz(4));
console.log(collatz(6));
console.log(collatz(8));
console.log(collatz(10));
console.log(collatz(12));
console.log(collatz(14));
