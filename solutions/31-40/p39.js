//PROBLEM

// If p is the perimeter of a right triangle with integer lengths {a,b,c} there are exactly three solutions for p=120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p < 1000, is the number of solutions maximized.

//OUTLINE TO SOLUTION
// 1. generate all possible integer-number sides
// 2. calculate perimeter for each combination a,b,c combo
// 3. for any p, calculated from a combo, add one to the pth entry in an array
// 4. Find the entry in the array with the largest entry. That will be the p
//		which appeared the most number of times during our perimeter generation 


//SOLUTION

//Start counting how long the process took
var start = new Date().getTime();

function solveP39(){

	var solutions = [];

	//initialize the solutions array where each entry represents
	//a possible perimeter. solutions[16] =2 would mean that we generated
	//the p=16 twice during our number generation
	for (var i=0; i < 1001; i++){
		solutions.push(0);
	}

	//generate all possible values of p
	c = 5; //hypotenuse of smallest right triangle with integers
	for (var a = 3; a < 1001; a++){

		for (var b =4; b < 1001-b-c; b++){
			
			c = Math.sqrt(a*a + b*b);
			// we only check c if it is an integer and c creates
			// a perimeter less <= 1000
			if (c % 1 == 0 && (a + b+c) <1001){
				p = a + b + c;
				solutions[p]++;	
			}		
		}
	}

	//find the p with the most solutions
	var most_solutions = [0,0];
	for (var i=0; i <1001; i++){		
		if (most_solutions[1]<= solutions[i]){
			most_solutions[0] = i;
			most_solutions[1] = solutions[i];
		}
	}

	console.log("P with most solutions is:%d", most_solutions[0]);
	return;
}

//CALLING THE FUNCTION

console.log(solveP39());

var end = new Date().getTime();
//solution took 33 milliseconds
console.log("Time to solve problem: %s milliseconds", end - start);
