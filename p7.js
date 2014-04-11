function findNthPrime(n){

	var primeNth = 0;
	var i = 1;

	while (primeNth < n){
		i++;
		if(checkIfPrime(i)){
			primeNth++;
		}
	}
	return i;
}

function checkIfPrime(num){

	//check that every number before is not modulo
	for (var i =2; i < num; i++){

		if( num % i == 0){
			return false;
		}
	}
	return true;
}

var n = findNthPrime(10001);
console.log(n);