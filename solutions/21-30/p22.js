var fs = require('fs');

//read file with 5k names
//sort the names into alphabetical order
//work out the alphabetical value for each name
//multiply this value by its alphabetical position

//return array sanitized without quotes
function removeQs(arr){

	//remove q
	for (var i =0; i < arr.length; i++){
		str = arr[i].substring(1, arr[i].length -1);
		console.log(str);
		arr[i] = str;

	}

	return arr;
}

function sumNumerical(arr){

	var sum = 0;
	var total =0;

	//iterate over every name
	for (var i =0; i < arr.length; i++){

		//reset sum
		sum =0;`

		//iterate over character in a word
		for (var j =0; j < arr[i].length; j++){
			sum += (arr[i][j].charCodeAt(0)-64) ;
		}

		total += sum*(i+1);
		console.log ('name: %s sum:%s * i: %s and current sum',arr[i], sum, i+1, total);
	}


	return total;
}

fs.readFile('./names.txt', {encoding: 'utf8'}, function(err,data){

	//place all the names into a string
	var arr = data.split(',');
	arr = arr.sort();
	console.log(sumNumerical(removeQs(arr)));

});

console.log(parseInt('A'.charCodeAt(0))-64);