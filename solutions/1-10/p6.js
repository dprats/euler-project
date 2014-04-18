//find diff between sum of squares of first 100
	//(1^2 + 2^2+...)
//	the square of the sum of first 100
	
function squareOfSum(num){
	var result = 0;

	for (var i =1; i <=num; i++){
		result = result +i;
	}

	return result*result;
}

function sumOfSquares(num){
	var result =0;

	for (var i =1; i <=num; i++){
		result = result + i*i;
	}
	return result;
}

console.log(squareOfSum(100) - sumOfSquares(100));
