//perfect number is one whose sum of proper divisors exactly
//equal the number
//28 is a perfect number = (1 +2+4+7+14 = 28)

//number n is deficient if sum of proper divisors < n
// n is abundant if sum(d(n)) > n 

//12 is the smallest abundant number
//24 is the smallest number written as sum of 2 abundant

//all integers > 28123 can be written as the sum of two
//abundant numbers

//find sum of al positive integers that cannot
//be written as the sum of two abundant numbers

//function returns an array of numbers [0,1,2,3,4...,limit]
function generateNumbers(limit){

	var arr =[];

	for (var i =0; i < limit; i++){
		arr.push(i);
	}

	return arr;
}


//acept a limit and return an array full of abundant 
//numbers
function generateAbundant(limit){

	var arr =[];

	for (var i=0; i < limit; i++){
		if (isAbundant(i)){
			arr.push(i);
		}
	}

	return arr;
}

//returns true if a number is abundant
function isAbundant(n){

	if (divisor(n) > n){
		return true;
	} 
	return false;
}

//return sum of divisors
function divisor(num){

	var sum =0;
	var square = Math.sqrt(num);

	if (num == parseInt(square)*parseInt(square) ){
		sum += square;
	}

	for (var i =0; i < square; i++){
		if (num % i == 0){
			sum +=i;
			sum +=(num/i);
			// console.log('divisors (%s,%s)', i, (num/i));
		}
	}
	//remove the original number from divisors
	sum -=num;
	// console.log('sum of divisors is %s', sum);
	return sum;
}

function addAbundant(arr){

	var areSumsOfAbundant =[];

	//iterate through 2 copies of arr
	//add up the numbers and place them in a new array
	//of length 2*limit
	for (var i =0; i < arr.length; i++){
		for (var j=0; j < arr.length; j++){
			if (arr[i] + arr[j] <= 28123) {	
				areSumsOfAbundant[ (arr[i]+arr[j]) ] = true;
			} else {
				areSumsOfAbundant[ (arr[i]+arr[j]) ] = false;
			}

		}
	}
	return areSumsOfAbundant;
}


function solve23(limit){

	var sum = 0;

	//generate an array of Abundant numbers
	var arr = generateAbundant(limit);

	//create an array which adds every abudant number with each other
	//the length of this array is 2*limit
	var sumOfAbundant = addAbundant(arr);
	// console.log(sumOfAbundant);

	//iterate through every number on the list above
	//remove it from the main list and return a purged list

	for (var i=0; i < limit; i++){
		if (!sumOfAbundant[i]){
			console.log('i= %s is NOT sum of abundant', i);
			sum += i;
		}
	}

	console.log('Sum is %s', sum);

	return sum;

}

solve23(28123);

