// PROBLEM

//In England the currency is made up of pound, £, and 
//pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p


//OUTLINE


// L  =  2a + 1b + 1/2c + 1/5d + 1/10e + 1/20f +1/50g +1/100h
// 2  =  2a + 1b + .5c + .2d + .1e + .05f + .02g + .01h

//where a,b,c,d,e,f,g,h =>0 AND INTEGERS


// if a = 1, then b=c=d=e=f=g=h=0 [only one way]

// Therefore we can use dynamic programming where we keep one 
// variable fixed at any one time.

// If a =1, there is only one option.

// If a = 0, there are more. We continue optimization:

// 2  =  1b + .5c + .2d + .1e + .05f + .02g + .01h

// Options for b:

// b = 0 -> solve given a=0, b=0
// b = 1 -> solve given a=0, b=1
// b = 2 -> solve given a=0, b=2

//Options for c: [0,1,2,3,4]
//Options for d: [0,1,2,3,4,5,6,7,8,9,10]
//...
//Options for h: [0,1,2...200]

//The solution was inspired by blog post: 
//http://www.mathblog.dk/project-euler-31-combinations-english-currency-denominations/

// SOLUTION

//Brute Force

var start = new Date().getTime();

function solveP31(){

	var goal = 200; //200 pennies
	var count =0;
	var currentSum =0;

	arr =[200,100,50,20,10,5,2,1];

	for (var a=goal; a >=0; a -=arr[0]){
		for (var b=a; b>=0; b -=arr[1]){
			for (var c=b; c>=0; c -=arr[2]){
				for (var d=c; d>=0; d -=arr[3]){
					for (var e=d; e>=0; e -=arr[4]){
						for (var f=e; f>=0; f -=arr[5]){
							for (var g=f; g>=0; g -=arr[6]){
								count++;
							}
						}
					}
				}
			}
		}
	}
	
	console.log("Number of solutions:%s", count);
	return count;
}

solveP31();

var end = new Date().getTime();
console.log("Time to calculate: %s milliseconds", end-start);

