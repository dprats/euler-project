//require Big Integer library from BigInteger.js
var bigInt = require("big-integer");


//factorial function which handles big integers
function factorial(n){

	if (n ==1){
		return 1;
	}

	return bigInt(n).multiply(factorial(n-1));
}

//accepts a bigInt and sums the digits
function addDigits(b){

	var sum =0;
	var str = bigInt(b).toString();

	for (var i =0; i < str.length; i++){

		sum += +str[i];
	}

	return sum;
}

var f = addDigits(factorial(100));
console.log(f);
console.log( 1+2+220+284);