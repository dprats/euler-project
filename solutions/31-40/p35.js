// PROBLEM

// A number 197 is called circular prime because the digits: 197. 971 and 719 are themselves prime.

// There are thirteen such primes below 100: 2,3,5,7,11,13,17,31,37,71,73,79,97

// How many circular primes are there below one Million?

// OUTLINE

// Brute Force Method

// 1. Generate all Prime numbers below one million using the Sieve Of Eratosthenes.
// 2. For every number, check if it is Circular
// 3. if a number is circular, add one to the count of circulars
// 4. whether a number is circular or not, after we check it, we make
//		all rotations of that number equal to 0, so we do not bother re-checking 
//		them
//5. Output the count

//Starting the clock to time the function
var start = new Date().getTime();

//array to store all our prime numbers
var primes =[];

//return an array with all prime numbers below LIMIT
//This uses the Sieve of Eratosthenenes

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

//return true if a number is circular

function circular(num){

	var str = num.toString();
	
	//so long as str is prime, iterate over a number's circular 
	//rotations to see if they are prime


	for (var i=0; i< str.length;i++){	
			//store first digit from the current number
		var temp = str[0];
			//remove first digit from current number 
		str = str.slice(1,str.length);
			//add the removed first digit to the end of the number
		str += temp;

		//if any rotation is found to be non-prime,
		//to save time, we make all other rotations 0 
		if (primes[+str] ==0){
			//we make every other rotation equal to 0
			//so we do have to recalculate it.
			//This will speed up our calculations
			primes = removeNonCircular(primes,+str);
			//return false since at least one rotation
			//was non-prime
			return false;
		}		
	}

	//we make every other rotation equal to 0
	//so we do have to recalculate it.
	//This will speed up our calculations
	primes = removeNonCircular(primes,+str);

	return true;
}


//accepts an array, and removes all the rotations of number "index"
//this function exists so we can optimize the fuction "circular"
function removeNonCircular(arr,index){

	var str = index;

	for (var i=0; i< str.length;i++){	
			//store first digit from the current number
		var temp = str[0];
			//remove first digit from current number 
		str = str.slice(1,str.length);
			//add the removed first digit to the end of the number
		str += temp;
		arr[+str] = 0;
	}
	return arr;
}


function solveP35(limit){

	//generate all the primes below one million
	primes = sieve(limit);
	var count =0;

	//iterate over every prime
	for (var i=2; i <primes.length; i++){
		//if a number is circular, add one
		if (primes[i] != 0 && circular(primes[i])){
			count++;
		}
	}

	console.log("There are %s circular primes", count);
	return count;
}

//call function to solve the problem
solveP35(1000000);


var end = new Date().getTime();
//solution took 388 milliseconds.
console.log("Time to compute:%s milliseconds", end - start); 
