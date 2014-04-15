

//1/6 = .1(6) so it has 1-digit recurring cycle
//1/7 = .(142857) so it had a 6-digit recurring cycle


//for d <1000, which has the longest recurring cycle
// in its decimal fraction part

//Steps
//1. check only d's which are prime numbers
//2. store the longest recurring cycle length, replace if bigger
//3. identify a recurring cycle for any 1/d

//solution inspired by following:
//http://42studios.com/2013/07/reciprocal-cycles/
//http://www.mathblog.dk/project-euler-26-find-the-value-of-d-1000-for-which-1d-contains-the-longest-recurring-cycle/

//sieve of eratosthenes

// var bigInt = require('big-integer');
// var Big = require('big.js');

function sieve(limit){

	var arr =[];
	//generate array with numbers 0,1, ...limit
	for (var i =0; i < limit; i++){
		arr.push(i);
	}

	//remove all non-prime numbers using sieve method
	for (var j =2; j < limit; j++){
		for (var k= 2; k <limit/j; k++){
			arr[j*k] = 0;
		}
	}
	return arr;
}

//function checks the number of cycles
//for every prime number less than the limit
function recordCycles(limit){

	//check only the prime numbers
	var arr = sieve(limit);

	var longest_cycle = 1; //cycle length
	var d_with_most_cycles = 1; //initialize

	//start at 3 because we only car for primes
	for (var i=7; i < limit; i++){
		//for any number which is prime...
		if (arr[i] !=0){
			//... if its cycles are bigger than current max,
			// use that number as the current maximum

			if (countCycles(arr[i])>longest_cycle){
				longest_cycle = countCycles(arr[i]);
				d_with_most_cycles = arr[i];
			}
		}
	}

	return [longest_cycle,d_with_most_cycles];
}
//function accepts a number, and returns the number of cycles
function countCycles(n){

	var cycles =1;
	var remainder = 10 % n; //10 % 7 = 3

	//we know that 1 % n = 1, therefore when remainder =1
	//then the cycle is starting all over again
	while (remainder !=1){
		remainder = 10*remainder % n;
		cycles++;
	}
	return cycles;
}

var solution = recordCycles(1000);
console.log('Solution: %s. It has %s cycles', solution[1], solution[0]);