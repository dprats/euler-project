//find sum of all primes below two million

function findSum(arr){

	var sum = 0;

	for (var i =0;i<arr.length; i++){
		sum +=arr[i];
	}
	return sum;
}

//8
//19 -2,3,5,7,11,13,17

function findPrimesBelow(n){

	var primes =[2];

	for (var i=2; i< n; i++ ){
		if (isPrime(i,primes)){
			primes.push(i);
		}

	}

	return primes;
}

function isPrime(n){

	if( n == 0){
		return false;
	}

	for (var i =2; i < n; i++){
		if (n % i == 0){
			return false;
		} 
	}
	return true;
}

function generateArrBelowN(n){

	var arr =[];
	for (var i =0; i <n; i++){
		arr.push(i);
	}
	return arr;
}

function sieve(arr){

	for (var i =2; i < arr.length; i++){
		// if(arr[i] == 0){
		// 	// console.log('arr[')

		// } else if (isPrime(i)){

			arr = removeAllMultiples(i,arr);
		// }
	}
	return arr;
}

function removeAllMultiples(number, array){

	for (var i=2; number*i< array.length; i++){
		// console.log('i is ' + i);
		// console.log('number*i is ' + number*i);
		array[number*i] =0;
	}
	return array;
}

var numbers = generateArrBelowN(10);

// console.log(numbers);
// console.log(sieve(numbers));
console.log(findSum(sieve(numbers)));


// console.log(findPrimesBelow(200));
// var num =2000000;
// console.log('primes below '+num+ ': '+ findSum(findPrimesBelow(num)));