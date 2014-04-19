//145 is "curious" because 1! + 4! + 5! = 1 + 24 + 120 = 145.

//Find the sum of all numbers equal to the sum of the 
//factorial of their digits

//Brute Force Attempy

//1. Reduce the numberspace
//2. generate sums of factorials i, and check if i is curios
//3. return the sum of all curious numbers
//[ Brute force above is not feasible, it took more than 10 minutes]

// OUTLINE FOR ACTUAL SOLUTION

//For 8 digit numbers abcdefgh, 9,999,999 < abcdefgh < 10,000,000. 
//9! = 362,880 Therefore even if every digit a,b,c,d,e,f,g,h,i is 9, 
//8*9! < 9,999,999 so this is an upper bound.

//Our strategy is the following:
	//1. check if any 1,2,3 and 4 digit number is curious (this is fast)
	//2. Store the factorialized (a! + b! + c!  for digit abc ) version of every number checked
	//3. For 5,6,7,8 digit numbers do the following:
	//	a) pick a 4-digit number abcd between 1000 and 9999 stored above
	//	b) calculate what conditions a potential w, wx, wxy, or wxyz
	//	must meet in order for abcdw, abcdwx, abcdwxy, or abcdwxyz to be curious
	//	


//SOLUTION

//for a number with limit k, d-number ofdigits, generate the curious numbers
var start = new Date().getTime();

//return an array s.t. for every number abcd upto 10k, we have
//a! + b! + c! + d! - a -b - c - d
function generateDigits(){
	var arr =[];
//we ony generate 1,2,3, and 4 digit numbers
	for (var i=0; i < 10000; i++){
		arr.push(factorialize(i));
	}
	return arr;
}

function factorial(i){
	if (i ==0){
		return 1;
	}
	return i*factorial(i-1);
}

//for any number abc, returns a! + b! + c!
function factorialize(num){
	var str = num.toString();
	var sum = 0;

	for (var i=0; i < str.length; i++){
		sum += factorial(str[i]);
	} 
	return sum;
}

//returns true if a number is "curious"
function curious(num){

	var str = num.toString();
	var sum = 0;

	if (num ==1 || num ==2){
		return false;
	}

	for (var i=0; i < str.length; i++){
		sum+= factorial(+str[i]);
	}

	return (sum == num)? true:false;

}

function solveP34(){

	//generate an array with all the factorializations
	//from 1 to 10k
	var arr = generateDigits();


	//check for all numbers upto 4 digits to see if they
	//are curious
	for (var i =0; i <10000; i++){
		if (curious(i)){
			curiousNumbers.push(i);
		}	
	}

	//convert all numbers in array to have form:
	//w! - w so we can do the filtering check below
	//(as described in solution outline)
	for (var j=0; j < arr.length; j++){
		arr[j] = arr[j] - j;
	}


	for (var j=1000; j <10000; j++){

			//We reduce the problem domain by doing the following:


			//If we have a given 5-digit number abcd, there exists a 
			//5-digit curious number ONLY if following holds:

			// abcdw = (abcd)*1000 + w = f(abcd) + f(w)
			// (abcd)*10 + w = f(abcd) + f(w) = a! +b! + c! + d! +w!

			// (abcd)*10 - f(abcd) = w! -w
	

			//check for all 5 digit numbers
			var temp = (j*10 -factorialize(j));

			var index = arr.indexOf(temp)
			//we only check if a number is curious IF
			// a) there exists a w s.t. (abcd)*10 - f(abcd) = w! -w
			// b) that w < 10 so we have a 5-digit number abcdw
			if (index != -1 && index <10){
				var candidate_5_digit_number = j.toString()+index.toString();
				if (curious(candidate_5_digit_number)){
					curiousNumbers.push(j.toString()+index.toString());
				}
			}

			// (abcd)*100 + w + z = f(abcd) + f(wz) = a! +b! + c! + d! +w! + z!

			// (abcd)*100 - f(abcd) = w! + z! -w -z = f(wz) - w - z 

			//check for all 6 digit numbers
			temp = (j*100 -factorialize(j));
			var index = arr.indexOf(temp)
			//we only check if a number is curious IF
			// a) there exists a number wz s.t. (abcd)*100 - f(abcd) = w! + z! -w -z
			// b) that 10 < wz < 100 so we have a 6-digit number abcdw
			if (index >10 && index <100){
				var candidate_6_digit_number = j.toString()+index.toString();
				if (curious(candidate_6_digit_number)){
					curiousNumbers.push(j.toString()+index.toString());
				}
			}
		

			//check for all 7 digit numbers
			temp = (j*1000 -factorialize(j));
			var index = arr.indexOf(temp)
			if (index >100 && index <1000){
				var candidate_7_digit_number = j.toString()+index.toString();
				if (curious(candidate_7_digit_number)){
					// console.log("       abcd:%s +index:%s is curious",j, index);
					curiousNumbers.push(j.toString()+index.toString());
				}
			}

			//check for all 8 digit numbers
			temp = (j*10000 -factorialize(j));
			var index = arr.indexOf(temp)
			if (index >1000 && index <10000){
				var candidate_8_digit_number = j.toString()+index.toString();
				if (curious(candidate_8_digit_number)){
					curiousNumbers.push(j.toString()+index.toString());
				}
			}
	}

	//add up the curious numbers
	var sum = 0;
	for (var k=0; k < curiousNumbers.length; k++){
		sum += +curiousNumbers[k];
	}


	return sum;
}

var curiousNumbers =[];
console.log(solveP34());

var end = new Date().getTime();
console.log("Time to compute:%s milliseconds", end - start); //solution took 800 milliseconds