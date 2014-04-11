//sequence

function findDivisors(num){

	var divisors = [];
	for (var i= 0; i <= num; i++){
		if (num % i == 0){
			divisors.push(i);
		}
	}
	return divisors;
}

function fiveDivisors(arr){
	if (arr.length >499) {
		return true;
	}
	return false;
}

function generateTriangle(num){

	var result = 0;

	for (var i =0; i <= num; i++){
		result = result + i;
	}
	return result;
}

function generateTriangleUntil500(){

	var num = generateTriangle(1);
	console.log('num:' + num);
	var divisors = findDivisors(3);
	console.log('divisors:' + divisors);
	var i =1;

	while (!fiveDivisors(divisors)){
		num++;
		console.log('num: ' + num);
		console.log('triangle: ' + generateTriangle(num));
		divisors = findDivisors(generateTriangle(num));
		console.log('divisors: ' + divisors.length);
	}

	return num;
}
console.log(findDivisors(generateTriangle(11)));
console.log(findDivisors(232));
// console.log(fiveDivisors(findDivisors(500)));

// console.log(generateTriangleUntil500());