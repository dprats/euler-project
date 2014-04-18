
//for every row, create sums of best paths

// [75]
// [p1, p2]
// [17+p1, Math.max(47+p1, 47+p2), 82+p2]
// [p21, p22, p23]
// [18+p21, Math.max(35+p21, 35+p22), Math.max(87+p2, 87 +p3), 10+ p3]

//[0->0]
//[i-> i,i +1]
//[n->n-1]

var fs = require('fs');
var str ='';
var numberArr = [];
var paths =[];
var result =0;

function optimize(arr){

	var answer = 0;
	var pathArr =[]
	//convert array to numbers
	// arr = numerize(arr);
	pathArr = arr;
	pathArr[0] = [75];
	console.log()

	//create array of dynamic paths solutions
	for (var i = 1; i < arr.length; i++){
		//arr[0] = [75]
		//arr[1] = [ 95, 64 ] -> pathArr[1] = [(95+75), (64+75)]
		//												pathArr[1] = [170,139]
		//arr[2] = [ 17, 42, 82 ] -> pathArr[2] = [(17+170), (42+170 || 42 +139), (82 +139)]
																//[187, 212, 241]
		//extreme solutions
		pathArr[i][0] = arr[i][0] + pathArr[i-1][0];	
		var l = pathArr[i].length;		
		pathArr[i][l-1] = arr[i][l-1] + pathArr[i-1][pathArr[i-1].length -1];

		for (var j= 1; j < arr[i].length-1; j++){
			//[0->0]
			//[i-> i,i +1]
			//[n->n-1]
				pathArr[i][j] = arr[i][j]+ Math.max( pathArr[i-1][j], pathArr[i-1][j-1] );

		}

	}
	console.log(pathArr);

	answer = maxItem(pathArr[pathArr.length -1]);	

	return answer;
}

function numerize(arr){

	arr[0] = +arr[0];

	for (var i =1; i < arr.length; i++){

		//'75 34' => ['75', '34']
		//convert every string into an array
		arr[i] = arr[i].split('\n');
		// console.log(arr[i]);
		//['95 64'] -> [['95', '64']] -
		arr[i]= arr[i][0].split(' ');


		//convert every array of string digits to numbers
		//['95', '64'] -> [[95, 64]]
		for (var j =0; j < arr[i].length; j++){

			arr[i][j] = +arr[i][j];
		}
		

	}

	return arr;
}

function maxItem(arr){

	var max= 3.5;
	console.log(arr);

	for (var i = 0; i < arr.length; i++){
		console.log
		max = (arr[i]> max)? arr[i]:max;
	}
	return max;

}

//[   187, 217, 221 ],
//   18   35   87    10
//205 
//[ 205, 222, 274, 231 ],


//read the data
fs.readFile('./maxPath1.txt', {encoding: 'utf8'}, function(err, data){

	var start = new Date().getTime();

	str+=data;
	numberArr = str.split('\n');
	// console.log(numberArr);

	//call the optimzation function on the numberArr
	result = numerize(numberArr);
	console.log(result);
	result = optimize(result);
	console.log('Maximum Path is: ' + result); 
	var end = new Date().getTime();
	console.log('It took %d milliseconds', (end - start));

});

