//2520 is the smallest number that can be divided
//by each of the numbers from 1 to 10 without any 
//reminder

//what is the smallest positive number that is 
//evenly divisible by all of the numbers from 1 to 20

function divisible(num, den){

	if (num % den == 0){
		return true;
	}
	return false;
}

//this function gets the prime factors of any 'num'
function getPrimeFactors(num){

	var primeArray =[];
	var i = 2;

	//check every number starting with 2
	while( i <=num ){

	//if a number is divisible, then divide by i
	//until it can no longer be divided by it
		if(divisible(num, i)){
			num = num/i;
			primeArray.push(i);
		} else {
			i++;
		}
	}
	return primeArray;
}


//1. go through every number and create its prime factors
//2. go through each [2,3,5,5] and count the frequency of each prime
//3. multiply each prime times its highest frequency

function getPrimeFactorizationArray(num){

	var arrayOfFactorization =[];

	for (var i=0; i <=num;i++){
		arrayOfFactorization.push(getPrimeFactors(i));
	}
	return arrayOfFactorization;
}

// console.log('prime factorization of 20: ');
// console.log(getPrimeFactors(20));
// console.log('prime array of 20: ');
// console.log(getPrimeFactorizationArray(20));

//this function gets an array of prime factorizations
//returns array of type [1, 2,0,1,0,0,2 ...]

function countPrimeFrequency(arr){
	
	var globalFrequency =[];

	globalFrequency = initializeGlobalFrequency(globalFrequency, arr.length);
	console.log('global[2 is ' + globalFrequency[2]);

	//go through each subArray in the array and
	//count the frequency of each prime

	for (var i =0; i <arr.length;i++){

		//each item i is actually an array...
		//so we count the frequency of #j in item i
		for (var j =2; j<= arr.length; j++){
			//get frequency of #j in array i
			console.log('checking frequency of ' +j +' in ' +arr[i]);
			var frequency = arr[i].filter(function(x){
				return x==j
			}).length;
			console.log('Local frequency of '+ j +' is ' + frequency);
			console.log('Global frequency of '+ j +' is ' + globalFrequency[j]);
			//if frequency of #j in i is greater
			//than the global frequency, use local frequency
			if (frequency> globalFrequency[j]){
				globalFrequency[j] = frequency;
			}
		}

	}

	return globalFrequency;

}

function initializeGlobalFrequency(arr, size){
	for (var i=0; i <size; i++){
		arr.push(0);
		console.log('added 0 to index ' + i + ' of globalFrequency');
	}
	return arr;

}

function lcm(arr){

	var lcm =1;

	//for every index, multiply it by its frequency
	for (var i =2; i <arr.length;i++){
		//if frequency >0
		if (i >0){
			lcm = lcm*Math.pow(i,arr[i]);	
		}
	}
	return lcm;
}


console.log(getPrimeFactorizationArray(20));
console.log(countPrimeFrequency(getPrimeFactorizationArray(20)));
console.log(lcm(countPrimeFrequency(getPrimeFactorizationArray(20))));