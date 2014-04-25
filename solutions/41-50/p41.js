//PROBLEM

//n-digit is pandigital if it makes use of all the 
//digits 1 to n, exactly once. 2143 is 4-digit pandigital.
//and it is also prime

//What is the largest n-digit pandigital that exists?

//As noted in the post: http://www.mathblog.dk/project-euler-41-pandigital-prime/
//We can reduce the search space by checking all n=7 and n=4
//numbers exclusively, because eveyr other pandigital is divisible
//by 3 and therefore NOT prime.

//In the solution below, instead of pre-generating the list of 
//primes and checking if any are pandigital. I found it much
//faster to generate the pandigitals, rank them, and check if any
//of the pandigitals is prime.
//It is also much faster to check all n=7 before generating n=4
//pandigital.

//For generating pandigitals, I use an algorithm for creating permutations which I found here:
//http://stackoverflow.com/questions/9960908/permutations-in-javascript


//SOLUTION OUTLINE

// 1. Generate all n=7 pandigital permutations
// 2. Rank the solutions from smallest to largest
// 3. Check (starting from the largest) if any are prime
// 4. If any are prime, return the value
// 5.Generate all n=7 pandigital permutations
// 6. Rank the solutions from smallest to largest
// 7. Check (starting from the largest) if any are prime
// 8. If any are prime, return the value
// 9. Otherwise, return false


//SOLUTION

//Start the clock to time the function
var start = new Date().getTime();

function solveP41(){

	//create an array of all 7-digit permutations
	//then sort the array from largest to smallest
	var n7 = nPandigital(7);
	
	//check all the n=7 digit pandigitals to see if any is pandigital
	for (var i = n7.length-1; i>0; i--){
		var number = (n7[i]);
		if (isPrime(number)){
			console.log("%d is pandigital and prime", number);
			return number;
		}
	}

	//create an array of all 4-digit permutations
	//then sort the array from largest to smallest
	var n4 = nPandigital(4);

	//check all the n=4 digit pandigitals to see if any is pandigital
	for (var i = n4.length-1; i>0; i--){
		var number = (n4[i]);
		if (isPrime(number)){
			console.log("%d is pandigital and prime", number);
			return number;
		}
	}
	console.log("No pandigital prime found");
	return;
}

//HELPER FUNCTIONS
// a) isPrime = checks if a number is prime
// b) permute = generates panditial permuntations of array [1,2,3...n]
// c) isPandigital = generates an array of every n-digit pandigital
//		permutation and ranks the array from smallest to largest.
//		By ranking it, it makes finding the "largest" easier.								

//returns true if a number n is prime
function isPrime(n){

	//take square root, and return false
	//if it is a perfect square
	var square = parseInt(Math.sqrt(n));
	if (square*square == n){
		return false;
	}
	//we only check up to the square root,
	//to optimize calculation
	for (var i=2; i < square; i++){
		if (n %i ==0){
			return false;
		}
	}
	return true;
}

//return an array of n-digit pandigitals ranked from 
//smallest to largest
function nPandigital(n){

	//generates an array of type [1,2,3..n]
	//which can then be consumed by the permute function
	var arr =[];
	for (var i=1; i <=n; i++){
		arr.push(i);
	}
	//return an array of all permutations of [1,2,3,...n]
	var arrPandigitals = permute(arr);
	//convert every [1,3,2,4] and [1,4,3,2] into 1324 and 1432
	//respectively
	arrPandigitals = arrPandigitals.map(function(arr){
		return +(arr.join(""));
	});
	//rank the array from smallest to largest number
	arrPandigitals.sort(function(a,b){ return a-b;})

	return arrPandigitals;
}


//variables below and function help in creating
//pandigital numbers by creating permutations of 
//arrays of numbers

var permArr = [];
var usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0]; //[3,7,1]
        usedChars.push(ch); //[5]
        if (input.length == 0) { //input.length = 3
            permArr.push(usedChars.slice());
        }
        permute(input); //permute([3,7,1]) -> permute [7,1] -> permute [1]
        input.splice(i, 0, ch); //
        usedChars.pop();
    }
    return permArr;
}

//CALLING THE FUNCTION

solveP41();

var end = new Date().getTime();
//Solution took 52 milliseconds
console.log("Time to calculate: %s milliseconds", end-start);
