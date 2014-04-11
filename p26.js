

//1/6 = .1(6) so it has 1-digit recurring cycle
//1/7 = .(142857) so it had a 6-digit recurring cycle


//for d <1000, which has the longest recurring cycle
// in its decimal fraction part

//Steps
//1. check only d's which are prime numbers
//2. store the longest recurring cycle length, replace if bigger
//3. identify a recurring cycle for any 1/d

//sieve of eratosthenes

var bigInt = require('big-integer');
var Big = require('big.js');

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

function recordCycles(limit){

	var arr = sieve(limit);

	var longest_cycle = [1,1,1]; //d, cycle, length

	for (var i=0; i < limit; i++){
		if (arr[i] !=0){
			if (cycle_length(arr[i])>longest_cycle){
				longest_cycle[0] = arr[i];
				longest_cycle[1] = cycle_length(arr[i])[0];
				longest_cycle[2] = cycle_length(arr[i])[1];
			}
		}
	}
	return longest_cycle;
}

function cycle_length(d){

	var arr =[];
	//initialize
	arr[0] = d;
	arr[1] = ''; //cycle
	arr[2] = 1;	//length of cycle

	var i =1;

		// Plan: subtract 1/d from ((1/d *10^i) % 1) 
		//until ==0. Every time i increases, the cycle 
		//length increaes
		// Example:
	   // 1/7 = .142857142857142857142857142857142857
 			//    	1.42857142857142857142857142857142857
    //       14.2857142857142857142857142857142857
    //      142.857142857142857142857142857142857
	   //    1428.57142857142857142857142857142857
	   //   14285.7142857142857142857142857142857
    //   142857.142857142857142857142857142857

    		//naive way of checking, potentially
    		//the precision will fail
	while ( ( (1/d)*Math.pow(100,i) % 1 ) - (1/d)*Math.pow(10,i) == 0){	
		i++;
	}

	arr[1] = (1/d).toFixed(20);
	arr[2] = i;

	//once done looping, return i;

	return arr;

}

console.log(cycle_length(7));
// console.log(cycle_length(9));
// console.log(cycle_length(11));
// console.log(cycle_length(13));
// console.log(cycle_length(17));