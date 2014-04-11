//prime factors of 13195 are 5,7 13 and 29

//what is the largest prime of 600851475143

var largestPrime = 1;
var num = 600851475143;
var factorArr = [];
var number_tested = 2;

//1. divide num by a factor, divide number by that factor
//until modulo is not 0 so 5*5*2*3, 150 = 2,75(3,25(5,5))
function divide_until_0(num, i){
	while(num % i == 0){
		num = num /i;
	}
	return num;
}


// console.log(divide_until_0(1500,2));
// console.log(num/1471);

while (number_tested < num){
	// console.log('number_tested: ' + number_tested +'for num:' +num);
	if (num % number_tested == 0){

		num = divide_until_0(num, number_tested);
		console.log('number_tested is '+number_tested+ '. divided!: ' +num );
		factorArr.push(number_tested);
		number_tested++;
	} else {
		number_tested++;
	}
}

console.log(factorArr);