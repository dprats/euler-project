//PROBLEM

//1406357289 is pandigital and has the following property:

//if d(1) is the first digit, d(n) is the nth digit
//d(2)*d(3)*d(4) is divisible by 2
//d(3)*d(4)*d(5) is divisible by 3
//d(4)*d(5)*d(6) is divisible by 5
//d(5)*d(6)*d(7) is divisible by 7
//d(6)*d(7)*d(8) is divisible by 11
//d(7)*d(8)*d(9) is divisible by 13
//d(8)*d(9)*d(10) is divisible by 17

//Find the sum of all 0-9 pandigital with this property

//OUTLINE TO SOLUTION

//1. generate all 0-9 pandigitals using permutations
//2. iterate over all permutations and check for property
//3. if a number has property add it to a sum

//For generating pandigitals, I use an algorithm for creating permutations which I found here:
//http://stackoverflow.com/questions/9960908/permutations-in-javascript


//SOLUTION

//Start the clock to time the function
var start = new Date().getTime();

function solveP43(){

	//generate array of all 9-digit pandigitals
	var pandigitals = generatePandigitals(9);

	var sum = 0;
	pandigitals.forEach(function(num){
		if (hasProperty(num)){
			sum += +(num);
		}
	});
	console.log("Sum of pandigitals with property: %d", sum);
}

//HELPER FUNCTIONS

//a) generatePandigitals - generates array of 9-digit permutations
//b) hasProperty - returns true if the number has property mentioned
//c) permute - helper function for generatePandigitals

//return an array of n-digit pandigitals ranked from 
//smallest to largest
function generatePandigitals(n){

	//generates an array of type [1,2,3..n]
	//which can then be consumed by the permute function
	var arr =[];
	for (var i=0; i <=n; i++){
		arr.push(i);
	}
	//return an array of all permutations of [1,2,3,...n]
	var arrPandigitals = permute(arr);
	//convert every [1,3,2,4] and [1,4,3,2] into 1324 and 1432
	//respectively
	arrPandigitals = arrPandigitals.map(function(arr){
		return (arr.join(""));
	});
	//rank the array from smallest to largest number
	// arrPandigitals.sort(function(a,b){ return a-b;})

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

function hasProperty(str){
	var primes = [2,3,5,7,11,13,17];
	for (var i=0; i <7; i++){
		if ( +(str[i+1]+str[i+2]+str[i+3]) % primes[i] !=0){
			return false;
		}
	}
	return true;
}

//CALLING THE FUNCTION
generatePandigitals(9);
// console.log(hasProperty("1406357289"));
// solveP43();

var end = new Date().getTime();
//Solution took 52 milliseconds
console.log("Time to calculate: %s milliseconds", end-start);
