//PROBLEM

//Take 192 and multiply it by each of 1, 2 and 3

//192 * 1 = 192
//192 * 2 = 384
//192 * 3 = 576

//If we concatenate each product, we get the 1-9 pandigital:
//192384576. 

//The same can be achieved by multiplying 9 times 1,2,3,4,5.

//What is the largest 1-9 pandigital 9-digit number that can be 
//formed as concatenated product of an integer 1,2,3..n?

//OUTLINE

// 1. Generate numbers i until i*n = 987654321 (largest possible 9=digit 
//		pan-digital number)
// 2. Check if the sum of its multiples are pandigital
// 3. Return the largest one 

//SOLUTION

//Start counting how long the process took
var start = new Date().getTime();

function solveP38(){

	var pans = [];
	var product = 1;
	var largest_i = 0;
	var largest_sum = 0;
	var sum = 0;
	var n = 0;

	//for all n = {2, 987654321/2 }, multiply times k
	//until the sum of its products is >, contains a 0,
	//or has a repeat digit
	for (var i= 2; i < (987654321/i); i++){

		//reinitialize 
		n = 1;
		sum =0;
		product =1;
		//for any number i, we keep multiplying it by n=1,2,3...
		//until the sum is no longer pandigital OR
		//we reach the highest 9-digit pandigital possible
		while (sum <987654321 && !isPandigital(sum)){
			product = i*n;			
			n++;
			sum = concat(sum,product);
		
			if (isPandigital(sum)){
				if (sum > largest_sum){
					largest_sum = sum;
					largest_i = i;
				}
			}
		}
	}
	// console.log("Largest pandigital is has [%s,%s]", largest_i, largest_sum);
	return largest_sum;
}

//accepts a number and checks to see if its is pandigital
function isPandigital(num){

	//return false, if it is not in the 9-digit range
	if (num <1000000 || num >999999999){
		return false;
	}

	var digits = 0;
	var count =0;	
	var last_iteration = 0;

	//Pandigital numbers only have 9 digits
	while (num >= 1){

		last_iteration = digits;
		
		//shave off the last digit
		var last_digit = num % 10;

		//last digit cannot be 0, so no need to keep checking
		if (parseInt(last_digit) ==0){
			return false;
		}

		// we "store" the removed digit using bitshift left on a number
		// if we shaved of a "9" then "digits" is  000000000 | 1 << 8 = 100000000
		// if we then shave off a "8" "digits" is  100000000 | 1 << 7 = 110000000
		// if we then shave off a "7" "digits" is  110000000 | 1 << 6 = 111000000
		// if we shave off another "8" "digits" is 111000000 | 1 << 7 = 111000000
		//		Since we found same digit twice, "digits" is the same last 2 iterations
		//		therefore it is NOT pandigital.
		last_digit = parseInt(last_digit);
		digits = digits | 1 << ( last_digit - 1);
		
		if (digits == last_iteration){
			return false;
		}

		//We divide number by 10 so we can shave the NEXT far-right digit
		//If we start with n= 542, and we removed "2" so we divide by 10
		//So we can have have n = 54.2 and now remove "4"
		//We remove far-right digits until following happens"
		//  a) we have a digit which is repeated (see above)
		//	b) there are no more digits to remove 
		count++;
		num /=10;
	}
	//we return the outcome of whether we use every digit
	//a digit which uses every digit
	//a number which uses every will have a "digits" that 
	// looks like this:'111111111' This number is 511 (though it means nothing)
	//'111111111' is only used to store what digits we found
	var pandigitalNumber = '111111111';
	return pandigitalNumber == digits.toString(2);
}

//accepts 2 integers: a,b and returns a number which concats  all two
//I use this method because it is faster than string manipulation
function concat(a,b){
	var c = b;
	while (c > 1){
		a *= 10;
		c = c/10;
	}
	return a + b;
}

//CALLING THE FUNCTION

console.log(solveP38());

var end = new Date().getTime();
//solution took 32 milliseconds
console.log("Time to solve problem: %s milliseconds", end - start);
