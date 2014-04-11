// d(n) is sum # of divisors of n
// if d(a) = b and d(b) = a, then a and b are amicable

//divisors of 220 are 1,2,4,5,10,11,20,22,44,55,110
//	therefore d(220) = 284
//divisors of 284 are 1,2,4,71, 142
//	therefore d(284) = 220

//find all amicable numbers under 10,000

//Brute Force:

//	1. find d(n) for every number to 10000
//	2. for ever d(n), find any that match

var start = new Date().getTime();

function d(n){

	//this avoids adding numbers twice
	var square = Math.sqrt(n);  
	var sum =1;; //sum of factors
	var arr =[];

	//if number is a perfect square
	if (n == parseInt(square) * parseInt(square) ){
		sum += square;
		// arr.push(square);
	}

	for (var i = 2; i < square; i++){
		if (n % i ==0){
			sum +=(i);
			sum +=(n/i);
			// arr.push(i);
			// arr.push(n/i);
		}
	} 
	return sum;
}

function isAmicable(x,y){
	if (d(x) == y && d(y) ==x){
		return true;
	}

	return false;
}

function findAmicable(limit){

	var arr = [];
	var sol = [];

	//create array of d(n)'s
	for (var i=0; i < limit; i++){
		//generate d(i) and place in array
		arr.push(d(i));
	}

	//check every item, check whole array for a pair
	for (var j =0; j < limit; j++){
		for (var k = 0; k < limit; k++){
			if ( k!=j && arr[j] == k && arr[k] == j){
				sol.push([j,k]);
			}
		}
	}

	return sol;
}

function sumAmicable(arr){

	//sum every other sub-array
	var sum = 0;

	for (var i =0; i < arr.length; i+=2){
		sum += arr[i][0] +arr[i][1];
	}

	return sum;
}



console.log(findAmicable(10000));
//subtract 3 because (1,2) do not count for the solution
console.log(sumAmicable(findAmicable(10000))-3);
console.log(1+2+220+284+1184+1210+2620+2924+5020+5564+6232+6368);
var end = new Date().getTime();
console.log('Solution took %s milliseconds', end-start);

