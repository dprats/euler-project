//12345 is pandigital because it digit is contained twice
//"7354 = 39 X 186" which is pandigital

//find the sum of all products whose multiplicand/multiplier/product
//can be written as 1 through 9 pandigital

//Initial upper bound pan digital number is 987,654,321
//However we know that its multiplier/multiplicand/product
//combo is NOT pandigital.

//OUTLINE TO SOLUTION

//The algorithm is shamelessly derived from looking at this blog:
//http://www.mathblog.dk/project-euler-32-pandigital-products/
//And reading about Bitwise operations here:
//	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
//	- http://michalbe.blogspot.com/2013/03/javascript-less-known-parts-bitwise.html

//1. A pan digital number has 1-9 for a*b=c, therefore
//	we look for a, b s.t. the digits of a + digits + b+
//	digits of c equal exactly 9. The only way to get a 9 digit
// product are a (3-digit) * (2-digit) or (1 digit) *(4 digit).

//2. We iterate over all 3-digit numbers and multiply them by
//	2-digit numbers. If the number is PanDigital, we save it in
//	an array (for further verification)

//3. Note: we test if a number is PanDigital by doing following:
//	a) remove the last digit from number x
//	b) "save" the digit chopped off by making the nth
//	bit in a number 1. So if we chop 7 because it is the last digit
//	we make the 7th binary entry equal to 1.
//	c) if the entry s already one, it is not panigital
//	d) if the number does not have exactly nine digits, it is not pandigital
//	e) if the number is not equal to '111111111' by the end it is not pan digital


//SOLUTION

//Start counting how long the process took
var start = new Date().getTime();

function solveP32(){

	var pan =[];
	var joined = 0;
	var sum =0;

	//multiply a * b = c s.t. c is a 9-digit number

	//multiplying all 1-digit and 4-digit numbers
	for (var a=2; a <10; a++){
		for (var b=1234; b <9876; b++){
			joined = concat(a,concat(b,a*b));
			if( isPandigital(joined)){
				if (pan.indexOf(a*b) == -1){
					pan.push(a*b);
					sum += a*b;
				} 
			}
			
		}
	}

	//multiplying all 2-digit and 3-digit numbers
	for (var a=12; a <98; a++){
		for (var b=123; b < 987; b++){
			joined = concat(a,concat(b,a*b));
			if( isPandigital(joined)){
				if (pan.indexOf(a*b) == -1){
					pan.push(a*b);
					sum += a*b;
				} 
			}
		}
	}

	console.log("sum of pandigital numbers:%s", sum);

	return pan;

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


console.log(solveP32());

var end = new Date().getTime();
//solution took 52 milliseconds
console.log("Time to solve problem: %s milliseconds", end - start);
