var grid1 = '08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48';


var g = '08 02 22 97';
var g2= '08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00';

function gridInStringArray(s){

	var arr =[];
	for (var i =0; i< s.length; i++){
		// console.log(s[i]);
		arr.push(s[i]);
		// console.log(arr[i]);
	}
	return arr;
}

function convertToDigitsArray(arr){

	var numArray =[];

	for (var i =0; i <arr.length; i = i+3){
		if (arr[i] == ' '){
			numArray[i] = ' ';			
		} else {
		numArray[i] = arr[i] +arr[i+1];
		}
	}
	return numArray;
}

function removeSpace(arr){

	for (var i =0; i < arr.length; i++){
		// console.log(arr[i]);
		if(!arr[i]){
			// console.log('nothing! at element i:' +i);
			arr.splice(i,1);
			i =0;
		}
	}
	return arr;
}

function itemsToNums(arr){

	for (var i=0; i< arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
	return arr;
}

function prepareData(s){

	return itemsToNums(removeSpace(convertToDigitsArray(gridInStringArray(s))));
}

function multiplyDiagonalRight(matrix,index){

	product = matrix[index]*matrix[index+21]*matrix[index+2*21]*matrix[index+3*21];
	// console.log(matrix[index]+'*'+ matrix[index+21]+'*'+matrix[index+2*21]+'*'+matrix[index+3*21]+' = '+ product);
	return product;

}
function multiplyDiagonalLeft(matrix,index){

	product = matrix[index]*matrix[index+19]*matrix[index+2*19]*matrix[index+3*19];
	// console.log(matrix[index]+'*'+ matrix[index+21]+'*'+matrix[index+2*21]+'*'+matrix[index+3*21]+' = '+ product);
	return product;

}


function multiplyDown (matrix,index){

	product = matrix[index]*matrix[index+20]*matrix[index+2*20]*matrix[index+3*20];
	// console.log(matrix[index]+'*'+ matrix[index+20]+'*'+matrix[index+2*20]+'*'+matrix[index+3*20]+' = '+ product);
	return product;

}

function multiplyUp (matrix,index){

	product = matrix[index]*matrix[index-20]*matrix[index-2*20]*matrix[index-3*20];
	console.log(matrix[index]+'*'+ matrix[index-20]+'*'+matrix[index-2*20]+'*'+matrix[index-3*20]+' = '+ product);
	return product;

}

function multiplyRight(matrix,index){

	product = matrix[index]*matrix[index+1]*matrix[index+2]*matrix[index+3];
	// console.log(matrix[index]+'*'+ matrix[index+1]+'*'+matrix[index+2]+'*'+matrix[index+3]+' = '+ product);
	return product;

}

function multiplyLeft(matrix,index){

	product = matrix[index]*matrix[index-1]*matrix[index-2]*matrix[index-3];
	// console.log(matrix[index]+'*'+ matrix[index-1]+'*'+matrix[index-2]+'*'+matrix[index-3]+' = '+ product);
	return product;

}



function allDiagonalsRight(matrix){

	var result = 0;
	var product =1;

	for (var i=0; i < matrix.length-20; i++){
		if (i % 20 >16){

		} else {
			product = multiplyDiagonalRight(matrix, i);
			// console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}
	}
	// console.log('largest product is ' + result);
	return result;
}

function allDiagonalsLeft(matrix){

	var result = 0;
	var product =1;

	for (var i=0; i < matrix.length-20; i++){
		if (i % 20 <3){
			//

		} else {
			product = multiplyDiagonalLeft(matrix, i);
			// console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}
	}
	// console.log('largest product is ' + result);
	return result;
}

function allUp(matrix){

	var result = 0;
	var product =1;

	for (var i=60; i < matrix.length; i++){
		if (i%20==0) {console.log('NEW ROW');}
			product = multiplyUp(matrix, i);
			console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}
	
	// console.log('largest product is ' + result);
	return result;
}

function allDown(matrix){

	var result = 0;
	var product = 1;

	for (var i=0; i < matrix.length-20*3; i++){
			// if (i%20==0) {console.log('NEW ROW');}
			product = multiplyDown(matrix, i);
			// console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}

	// console.log('largest product is ' + result);
	return result;
}

function allRight(matrix){

	var result = 0;
	var product =1;

	for (var i=0; i < matrix.length-4; i++){
		if (i % 20 >16){
			//18 = 2 nope
			//20 = 0 yes
			//21 = 1 yes
			//16,17,18,19

		} else {
			// if (i%20==0) {console.log('NEW ROW');}
			product = multiplyRight(matrix, i);
			// console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}
	}
	// console.log('largest product is ' + result);
	return result;
}

function allLeft(matrix){

	var result = 0;
	var product =1;

	for (var i=0; i < matrix.length; i++){
		// if (i%20==0) {console.log('NEW ROW');}
		if (i % 20 <3){
	//2 no


		} else {

			product = multiplyLeft(matrix, i);
			// console.log(product);
			if(product > result){
				result = product;
				// console.log('largest product so far:' +result);
			}
		}
	}
	// console.log('largest product is ' + result);
	return result;
}

function allDirections(matrix){

	var result =1;
	var diagonalR = allDiagonalsRight(matrix);
	var diagonalL = allDiagonalsLeft(matrix);
	var left = allLeft(matrix);
	var right = allRight(matrix);
	var down = allDown(matrix);
	var up = allUp(matrix);

	return Math.max(diagonalR, left, right, down, up, diagonalL);

}


grid = prepareData(grid1);
console.log(grid);
console.log("up is:" + allUp(grid));
console.log("down is:" +allDown(grid));
console.log("right is:" +allRight(grid));
console.log("left is:" +allLeft(grid));
console.log("diag is:" +allDiagonalsRight(grid));
console.log("diag is:" +allDiagonalsLeft(grid));
console.log("diag is:" +allDirections(grid));