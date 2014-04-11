//3124 is one permutation of 1,2,3 and 4
//if all permutations are listed numerially or alphabetically...





//Solution inspired by this blog: 
//http://blog.singhanuvrat.com/problems/project-euler-the-millionth-lexicographic-permutation-of-the-digits
//coding the steps taken

function factorial(n){

	if (n==1){
		return 1;
	}
	return n*factorial(n-1);
}

// n= 1,000,000th digit from lexicographic ordering
// of 10 digit number from (0,1,2,3...9).
// there are 10! permutations possible

function findNthDigit(limit){
	var str ='';
	var arrStr = ['0','1','2','3','4','5','6','7','8','9'];

//iterate over every slot of the 10 digit number
	for(var j =1; j <10;j++){
	

//check every number not being used
		for (var i =0; i <=9; i++){

			// if i =7, and the string is 5 characters long
			var digit = arrStr[i];

				var checkLarge = (i+1)*factorial(9 -str.length);
				var checkSmall = (i)*factorial(9 -str.length);
  	
				if ( checkSmall < limit && limit < checkLarge ){
					//add digit ONLY if it is not already being used
					if (str.indexOf(digit) == -1){
						var subtractFactorial = (i)*factorial(9-str.length);
						limit = limit - subtractFactorial;
						str += digit;
						arrStr.splice(i,1);

					}
					
				}
		}

	}
	var answer = [str,limit, arrStr];
	return answer;
}


var solution = findNthDigit(1000000);
console.log('The first 7 digits are: '+ solution[0]);
console.log('Last 3 digits are the index i=%s of %s', solution[1], solution[2]);
//we know it is '460' because that is the fourth 
//permutation of [0.4,6]. So we append it to answer above
console.log('the solution is :' +solution[0]+'460'+'\n');
