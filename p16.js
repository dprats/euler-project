//sum of digits of number 2^1000

//brute force

var bigInt = require("big-integer");


//factorial function which handles big integers
function factorial(n){

	if (n ==1){
		return 1;
	}

	return bigInt(n).multiply(factorial(n-1));
}

function sumDigits(num){

	var sum = 0;
	var str = bigInt(num).toString();

	for (var i = 0; i <str.length; i++){
		sum += parseInt(str[i]);
	}

	return sum;
}

var x = sumDigits(bigInt(2).pow(1000));

console.log(x);

