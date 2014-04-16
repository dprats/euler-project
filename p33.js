// The fraction 49/98 is a curious fraction since 49/98 = 4/8 
// 30/50 = 3/5 is trivial examples.

// Find the four non-trivial examples of this type of fraction:
 // - less than one in value
 // - containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, 
//find the value of the denominator.

//Brute Force Method

var start = new Date().getTime();


function solveP33(){

	var arr =[];

	//generate every possible 2-digit/2-digit fraction 
	//= 10,000 options
	//note we only check until 50 because after 50, we get repeats (49/98 AND 98/49)
	for (var i=10; i < 51; i++){ 
		for (var j=10; j < 100; j++){
			//for every option, test if it is nonTrivial

			if (nonTrivial(i,j) &&  i % 10 !=0 && i !=j){
				arr.push([i,j]);
			}
		}
	}

	//console resulting array to look at the four non-trivial
	console.log(arr);

	//multiply all the numerator & denominator of all four fractions
	var fraction = [1,1];
	for (var k = 0; k < arr.length; k++){
		fraction[0] *=(arr[k][0]);
		fraction[1] *=(arr[k][1]);	
	}

	//console
	console.log("fraction: %s/%s", fraction[0],fraction[1]);

	//no need to do anything further because answer is obvious from
	//the output above

	return arr;
}

//checks if a function is "non trivial example"

function nonTrivial(i,j){

	var numerator = i.toString();
	var denominator = j.toString();

	var a = numerator[0];
	var b = numerator[1];
	var c1 = denominator[0]; 
	var c2 = denominator[1];	

	//this is the trivial case
	if (c2 == 0 || numerator == denominator){
		return false;

	//we need to identify which digit is the "9" in 49/98 (repeated)
	} else if (c1 == a && (+numerator)/(+denominator) == b/c2){
		return true;
	} else if (c1 == b && (+numerator)/(+denominator) == a/c2){
		return true;
	} else if (c2 == a && (+numerator)/(+denominator) == b/c1){
		return true;
	} else if (c2 == b && (+numerator)/(+denominator) == a/c1){
		return true;
	}

	return false;

}

// console.log(nonTrivial(49,98));

solveP33();

var end = new Date().getTime();
console.log("Time to solve problem: %s milliseconds", end - start);