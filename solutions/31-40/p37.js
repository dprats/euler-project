//3797 is truncatable. We can remove digits from left to 
//right and remain prime at each stage: 3797, 797, 97 and 7.
//We can do right to left: 3797,379,37 and 3.

//Find the sum of the only 11 truncatable primes from (left-R) and (R-L)

//Note: 2,3,5,7 are not truncatable

// OUTLINE TO SOLUTION

//	1. Generate all primes less than 100K
//	2. Check every prime number to see if it can be truncated
//		- from both right and lefthand side direction
//		- if so, add it to the sum 
//	3. Once we 11 truncatable numbers stop

//SOLUTION

//Start counting how long the program runs
var start = new Date().getTime();

//we calculate only primes upto 1MM, because that is how many
//primes we needed to get to 11 truncatable numbers
//I discovered this by trial and error during optimization

var primes = []; 

function solveP37(){

	primes = sieve(100000);
	var trunkNumbersFound = 0;
	var sum = 0; //sum of the trunk numbes found
	var  i = 11;// 11 is the first candidate truncatable prime

	//we know there are only 11, so we stop when we find 11
	while (trunkNumbersFound <11){
		if (primes[i] !=0 && isTrunk(i)){
			sum +=i;
			trunkNumbersFound++;
		}
		i++;
	}
	console.log("sum of truncatable numbers:%s",sum);

	return;
}

//accepts a number. Return true/false depending if number
//can be trucanted from both left and right hand side directions
function isTrunk(num){
	//return false, if the number passed is non-prime
	if (primes[+num] ==0){
			return false;
	}

	//return false if we hit a non-prime by removing numbers
	//from the left
	var removeLeft = num.toString();
	while (removeLeft.length>0){
		// console.log("removeleft:%s",removeLeft);
		if (primes[+removeLeft] ==0){
			return false;
		}
		removeLeft = removeLeft.slice(1);
	}

	//return false if we hit a non-prime by removing numbers
	//from the right
	var removeRight = num.toString();

	while (removeRight.length>0){
		// console.log("removeRight:%s",removeRight);
		if (primes[+removeRight] ==0){
			return false;
		}
		removeRight = removeRight.slice(0,removeRight.length-1);
	}
	return true;
}

//HELPER FUNCTIONS FOR CHECKING FOR GENERATING PRIMES


//return array with all prime numbers less than a limit
//[0,1,2,3,0,5,0,7,0,0,0,11...limit]
function sieve(limit){
	// console.log("starting sieve");
	var arr = []; 
	//initialize an array
	for (var i =0; i < limit; i++){
		arr.push(i);
	}
	arr[1]=0;
	//check all 2*n, 3*n, 4*n,etc... and make their entries 0
	//whatever remains must be a prime
	for (var j=2; j < limit; j++){
		if (arr[j]!=0){
			for (var k=2; k < limit/j; k++){
			arr[k*j] = 0;	
			}	
		}
	}
	return arr;
}

//CALLING THE SOLUTION FUNCTION

solveP37();

var end = new Date().getTime();
//solution took 459 milliseconds.
console.log("Time to compute:%s milliseconds", end - start); 
