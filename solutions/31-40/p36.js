//PROBLEM

// Decimal number 505 = 10010010012 (binary) is palindromic in both cases.

// Find the sum of all numbers < 1MM which are palindromic in base 10 and base 2.

// Palindromic number will not include leading zero's.

//OUTLINE TO SOLUTION

// 
// 1. Generate all base 10 palindromes < 1MM
//		- we generate all the palindromes by adding a tail
//			to every number abc s.t. abc + cba = abccba or abc + ca = abccba
//		- by generating palindromes, we only check first 1000 numbers
// 2. Check if any generated palindromes is a palindrome in base 2
// 3. If its is base 2, add it to the sum


//SOLUTION

//Starting the clock to time the function
var start = new Date().getTime();

function solveP36(){

	var sum =0;

	//To generate 1,2,3,4,5,6-digit palindromes (numbers <1MM) we
	//we only need the first 1000 numbers
	for (var i=0; i <1000; i++){
		//mirror palindrome of type abba or abccba
		var firstHalf = i.toString();
		var reversed = firstHalf.split("").reverse().join("");
		var generatedPal = firstHalf + reversed;
		var binary = (+generatedPal).toString(2);
		//once a palindrome is generated, only add it to the array
		//if its binary is a palindrome too
		if (palindrome(binary)){
			sum += (+generatedPal);		
		}

		//generate odd-number if digits palindrome of type aba or abcba
		var reversed = reversed.slice(1,reversed.length);
		var generatedPal = firstHalf + reversed;
		binary = (+generatedPal).toString(2);
		//once a palindrome is generated, only add it to the array
		//if its binary is a palindrome too
		if (palindrome(binary)){
			sum +=(+generatedPal);		
		}		
	}
	//console the sum of all palindromes
	console.log("sum of all palindromes:%s", sum);

	return sum;
}

function palindrome(str){
	var reverse = str.split("").reverse().join("");
	if (reverse == str){
		return true;
	}
 return false;
}

//CALLING THE SOLUTION

solveP36();

var end = new Date().getTime();
//solution took 24 milliseconds.
console.log("Time to compute:%s milliseconds", end - start); 
