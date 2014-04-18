function isTriplet(a,b,c){

	if (a*a + b*b == c*c){
		return true;
	}
	return false;
}

console.log(isTriplet(3,4,5));

//find triplets given a + b + c = num
function findTriplet(num){

	var arr = [];

	for (var c =1; c< num; c++){

		for (var b=1; b< num-b; b++){

			for (var a=1; a <=num-c-b; a++){
				// console.log('(a,b,c):(' +a+','+b+','+c+')');
				if (isTriplet(a,b,c) && a + b+c == num){
					console.log('Success!:('+a+','+b+','+c+')')
					arr.push(a);
					arr.push(b);
					arr.push(c);
				}
			}
		}

	}


	return arr;
}

function abc(arr){

	return arr[0]*arr[1]*arr[2];

}

// console.log(findTriplet(1000));
console.log(abc(findTriplet(1000)));