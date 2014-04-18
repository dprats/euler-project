//A palindromic number reads the same both 
//ways. The largest palindrome made from the 
//product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from 
//the product of two 3-digit numbers.

var start = new Date().getTime();

function findLargestP(){

	var palindromes =[];

	//iterate through all the 3-digit combos...
	for (var i =100; i <1000; i++){
		for (var j =100; j <1000;j++){
			//check if i*j is a palindrome

			if(checkPalindrome(i*j)){
				palindromes.push(i*j);
			}
		}
	}
	return palindromes;
}

//if number is palindrome, return true
function checkPalindrome(num){

	var original = num.toString();
	var reversed = num.toString().split('').reverse().join('');//.splice(num.length/2, -1);
	
	if (original == reversed){
		// console.log(original + ' is a Palindrome!\n')
		return true;
	}
	return false;
}

Array.max = function(array){
	return Math.max.apply(Math, array);
}

var pal = findLargestP();
var largestP = Math.max.apply(Math, pal);

console.log(largestP);

var end = new Date().getTime();
console.log("Time to compute:%s milliseconds", end - start);

