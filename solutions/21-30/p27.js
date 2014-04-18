//quadratic formula: n^2 + n + 41

//formula will produce 40 primes for the consecutive values
// n = 0 to 39.  However,  n= 40 is divisble by 41.

//n^2 -79n +1601 produces 80 primes from 0 to 79
//The product of coefficients -79=b and 1601=c is '-126479'
//quadratic formula: http://en.wikipedia.org/wiki/Quadratic_formula
// [-b +/- SquareRoot(b^2 -4ac)] / (2*a)


// Considering:

// n^2 +bn+c where |b| < 1000 and |c| <1000

//Find the product of coefficients, b and c, for the 
//quadratic expression that produces the maximum
//number of primes for consecutive valus of n, starting at 0

//brute force alogorithm came from here: http://www.mathblog.dk/project-euler-27-quadratic-formula-primes-consecutive-values/

//BRUTE FORCE

var start = new Date().getTime();

//check if number is primes
function isPrime(n){

	var square = Math.sqrt(n);

	if ( n == parseInt(square)*parseInt(square)){
		return false;
	}

	for (var i = 2; i < square; i++){
		if (n % i == 0){
			return false;
		}
	}

	return true;
}

function findProduct(){

	//store the current maximum product of a*b
	//which satisfies the conditions
	var currentMaxProduct = 0;
	var currentMaxConsecutivePrimes = 0;

	for (var a = -1000; a < 1000; a++){
		for (var b = -1000; b < 1000; b++){
			//placeholder for the number of consecutive
			//primes generated
			var n = 0;
			//continue the loop while the number generated
			//is a prime number
			while( isPrime(Math.abs(n*n + a*n + b)) ){
				n++;
			}
			if (n > currentMaxConsecutivePrimes){
				//update a*b product
				currentMaxProduct = a*b;
				currentMaxConsecutivePrimes = n;

			}
		}
	}
	console.log('currentMaxProduct:%s', currentMaxProduct);
	return currentMaxProduct;
}

//Call the function
findProduct();

//console the time to solve function
var end = new Date().getTime();
//since the function took 650 ms, I did not optimize
console.log('Time to complete function:%s milliseconds', end - start);
