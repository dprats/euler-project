//fibonacci
// x[n] = x[n-1] + x[n-2] 
//first 12 terms: 
//F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144

//F12 is the first to contain 3 digits

//what is the first term to contain 1000 digits

var bigInt = require('big-integer');

//brute force

function fib(numberOfDigits){

	var start = new Date().getTime();

	//limit is the smallest number with x digits
	var limit = bigInt(10).pow(numberOfDigits-1);
	// var limit = bigInt(limit).minus();
	// console.log('limit:%s', limit);

	//initialize
	var i = 3;
	var n1 = bigInt(1);
	var n2 = bigInt(1);
	var n3 = bigInt(n1).add(n2);

	console.log('n3:%s', n3);
	
	
	//generate fibonnaci sequences
	while( bigInt(limit).greater(n3) ) {
		i++;
		var temp1 = bigInt(n3);
		var temp2 = bigInt(n2);
		
		// console.log('4782....n3:%s, n2:%s, n1:%s', n3.toString(), n2.toString(), n1.toString());
		
		
		n3 = bigInt(n3).add(n2);
		n2 = temp1;
		n1 = temp2;
		// console.log('i:%s, n3:%s', i, n3);
		

	}
	 var end = new Date().getTime();
	 console.log('Time to perform operation: %s milliseconds', end-start);
	return i;

}

var last = fib(1000);
console.log(last);