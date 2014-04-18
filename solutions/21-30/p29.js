// PROBLEM

//consider all integer combinations for a^b
// 2 <= a <= 5 && 2<=b b <=5

// 2^2=4, 2^3=8, 2^4=16, 2^5=32
// 3^2=9, 3^3=27, 3^4=81, 3^5=243
// 4^2=16, 4^3=64, 4^4=256, 4^5=1024
// 5^2=25, 5^3=125, 5^4=625, 5^5=3125

// If placed in numerical order, with repeats removed, 
//we get 15 terms:

//4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

//How many distinct terms are generated for (2,100) instead of (2,5)

// OUTLINE TO SOLVING THE PROBLEM

//There are 99*99 -removedTerms
//for range (2,5) the only term removed was 2^4 =16 = 4^2

//Brute Force Solution
//1. generate a^b for all (a,b) combos
//2. sort the field
//3. remove duplicates
//4. Add the distinct ones

//SOLUTION

//start time
var start = new Date().getTime();

var bigInt = require('big-integer');

function solveP29(a,b){

	//array to store the generated results
	var arr = [];

	//generate a solution for each (a,b) combo
	for (var i =a; i <= b; i++){
		for (var j=a; j <= b; j++){
			arr.push(bigInt(i).pow(j));
		
		}
	}
	var generateTime = new Date().getTime();
	console.log("Time to generate: %s", generateTime -start); //note: 9 seconds. need to optimize

	//sort the array
	arr = arr.sort(function(a,b){return a-b}); 
	var sortTime = new Date().getTime();
	console.log("Time to sort: %s", sortTime-generateTime); //note: 2 seconds. need to optimize

	//count number of distinct terms
	var distinct = 1;
	for (var k =1; k <arr.length; k++){
		if (bigInt(arr[k]).notEquals(arr[k-1])){ 
			distinct++;
		}
	}

	//reply with number of distinct terms
	console.log('There are %s terms total and %s distinct terms', arr.length, distinct);

	return arr;
}

solveP29(2,100);

//end time
var end = new Date().getTime();
console.log("Solution took %s milliseconds", end - start);

//solution time was 11,497 ms or 11 seconds. NOT ideal