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

function solveP28(limit){

	//generates 1001X1001 size array so we can add
	//diagonals. Limit is 1001 in problem
	var arr = generateArray(limit);

	//add the diagonals of the array
 	var sum = addDiagonals(arr);
 	console.log('Sum of diagonal:%s',sum);

 	return sum;
}

function generateArray(limit){
	var arr = [];

	//create/initialize an empty 2-dimensional array
	//of size limit * limit
	//[ [], [], [], []]
	for (var i =0; i < limit; i++){
		arr.push([]);
		for (var j =0; j < limit; j++){
			arr[i].push(0);
		}
	}

	//dummy array to better test
	// arr = [ [0,0,0,0,0],
	// 				[0,0,0,0,0],
	// 				[0,0,0,0,0],
	// 				[0,0,0,0,0],
	// 				[0,0,0,0,0]
	// ];



	//iterate starting at the middle place
	var m = parseInt(limit/2);
	arr[m][m] = 1;

	//iterate through the spiral
	var spiralCount = 1;
	//iterate over every number in the square array

	var previous = arr[m][m];
	var x =m;
	var y =m;

	var slots_filled = 1; //first slot filled is [m][m]

	

	//kickstart the spiral
		previous = arr[y][x];
		x++; //move to the right
		arr[y][x] = previous + 1;		//add one to previous
		slots_filled++;
//fill out the matrix via spirals until the whole spiral is 
//full
	while(slots_filled <limit*limit){

		
	//Down
	//move down until character to left is 0
	while(arr[y][x-1] !=0 && y < limit){
		previous = arr[y][x];
		y++; //move down
		arr[y][x] = previous + 1; //add one to previous
		slots_filled++;
		// console.log("DOWN:arr[%s][%s]=%s and slots=%s",y,x,arr[y][x],slots_filled);
	}
			

	//Left
	//move to the left as long until character up is 0
	while (arr[y-1][x] !=0){
		previous = arr[y][x];
		x--; //move left
		arr[y][x] = previous + 1;
		slots_filled++;
		// console.log("LEFT:arr[%s][%s]=%s and slots=%s",y,x,arr[y][x],slots_filled);
	}
				
	//Up
	//move up until character to right is 0
	while (arr[y][x+1] !=0){
		previous = arr[y][x];
		y--; //move up
		arr[y][x] = previous + 1;	
		slots_filled++;	
		// console.log("UP:arr[%s][%s]=%s and slots=%s",y,x,arr[y][x],slots_filled);
	}

	//Right
	//move to the right until character down is 0
	//AND we do not go beyond limit on the x-axis
	while(arr[y+1][x] != 0 && x <limit){
		previous = arr[y][x];
		x++; //move to the right
		arr[y][x] = previous + 1;		//add one to previous
		slots_filled++;
		// console.log("RIGHT:arr[%s][%s]=%s and slots=%s",y,x,arr[y][x],slots_filled);
	}

	}

	//after the spiral above our result is:

	// [ [ 21, 22, 23, 24, 25, 26 ],
 //  [ 20, 7, 8, 9, 10 ],
 //  [ 19, 6, 1, 2, 11 ],
 //  [ 18, 5, 4, 3, 12 ],
 //  [ 17, 16, 15, 14, 13 ] ]
 // so we remove the last element: 26 in this case,
 //because it goes beyond limit X limit

 //check the boundaries array for any elements which 
 //should not be there. If present remove them:


 //if top array is one digit too big
 	if (arr[0].length > limit){
 		//..remove top right element
 		arr[0].pop(); 
 	}

 	//if bottom array is one digit too big
 	if (arr[limit-1].length > limit){
 		//..remove top right element
 		arr[limit-1].pop(); 
 	}

	return arr;
}

function addDiagonals(arr){

	var limit = arr[0].length;
	var sum =0;

	//add top-right -> bottom-left diagonal
	for (var i=0; i < limit; i++){
		sum += arr[i][i];
	}

	//add top-left -> bottom-right diagonal
	for (var j=1; j <=limit ; j++){
		sum += arr[j-1][limit-j];
	}

	//since we added the middle number twice, we subtract it...
	sum -=arr[ (limit-1)/2 ][ (limit-1)/2 ];

	return sum;

}



//call the solution for 1001 elements 
// var arraySolution = generateArray(1001);
var arraySolution = solveP28(1001);

//end recording the time for solution
var end = new Date().getTime();
console.log('Time to calculate: %s milliseconds', end-start);


//the resulting solution was 160 milliseconds so no optimization