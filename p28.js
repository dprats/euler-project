//start with number 1 and moving to the right in a 
//clockwise direction a 5 by 5 spiral is formed

// '21' 22 23 24 '25'
// 20  '7'  8  9 10
// 19  6  '1'  2 11
// 18  '5'  4  '3' 12
// '17' 16 15 14 '13'

//sum of diagonals is 101
//what is sum of diagonals in a 1001 by 1001 spiral

//Brute Force
//1. generate the 1001 x 1001 array
//2. add up the diagonals

//Patterm for Diagonal Using the 5x5 matrix above:

// SPIRAL

// arr(middle)(middle]) = 1
// arr(m +1)(m) 	= arr(m)(m) +1;
// arr(m+1)(m) 		= 2 -> RIGHT 1
// arr(m+1)(m+1) 	= 3 -> DOWN 1
// arr(m)(m+1) 		= 4 -> LEFT 1

// SECOND SPIRAL
// arr(m-1)(m+1) 	= 5 -> LEFT 1
// arr(m-1)(m)  	= 6 -> UP 1
// a            	= 7 -> UP 1
// 								= 8 -> R1
// 								= 9 -> R1
// THIRD SPIRAL
								// = 10 -> R1
								// = 11 -> D1
								// = 12 -> D1
							 //  = 13 -> D1
								// = 14 -> L1
								// = 15 -> L1
								// = 16 -> L1
								// = 17 -> L1
								// = 18 -> U1
								// = 19 -> U1
								// = 20 -> U1
								// = 21 -> U1
								// = 22 -> R1
								// = 23 -> R1
								// = 24 -> R1
								// = 25 -> R1

//Note: spiral matrices 2 x2, 3x3, 4 x 4 (with 1 in the middle) 

//start recording the time for solution
var start = new Date().getTime();

function generateArray(limit){
	var arr = [];

	//create/initialize an empty 2-dimensional array
	//of size limit * limit
	//[ [], [], [], []]
	for (var i =0; i < limit; i++){
		arr.push([]);
		for (var j =0; j < limit; j++){
			arr[i].push(i);
		}
	}

	//dummy array to better test
	arr = [ [21,22,23,24,25],
					[20,7,8,9,10],
					[18,6,1,2,11],
					[18,5,4,3,12],
					[17,16,15,14,13]
	];



	//iterate starting at the middle place
	var m = parseInt(limit/2);
	arr[m][m] = 1;

	//iterate through the spiral
	var spiralCount = 1;
	//iterate over every number in the square array

	var previous = arr[m][m];
	var loop = 0;
	var right = 1;
	var down = 0;
	var left = 0;
	var up = 0;

		//loop for every spiral
		//there are (limit -1) spirals
		for (var spiral =1; spiral < limit-1; spiral++){
			//loop over each side of a spiral
			//the length of each side depends on the
			//spiral count

			

			//right
			
			while(right <=spiral){
				arr[m+down-up][m+right-left] = arr[m+down-up][m+right-left -1] + 1;
				right++;
			}

			//down
			while(down <=spiral){
				arr[m+down-up][m+right-left] = arr[m+down-up-1][m+right-left] +1;
				down++;
			}

			//left
			while(down <=spiral){
				arr[m+down-up][m+right-left] = arr[m+down-up][m+right-left+1] +1;
				left++;
			}
			//up
			while(up <=spiral){
				arr[m+down-up][m+right-left] = arr[m+down-up-1][m+right-left] +1;
				up++;
			}
			
				
		}


	return arr;
}

//call the solution
var arraySolution = generateArray(5);
console.log(arraySolution);

//end recording the time for solution
var end = new Date().getTime();
console.log('Time to calculate: %s milliseconds', end-start);
