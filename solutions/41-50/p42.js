//1. PROBLEM

//The nth term of a sequence of triangle numbers is:
//	t(n) = 1/2*n*(n+1)
//	1,3,6,10,15,21,28,36, 45, 55...

//By converting each letter to a word we get:
//SKY = 19 + 11 + 25 = 55
//Where 55 is a t(10) therefore "SKY" is a triangle word

//How many of the words in the file are triangle words

//2. OUTLINE TO SOLUTION

//0. generate all triangle numbers upto a certain value K
//1. read file, convert it to giant string
//2. split the giant string into array of individual words
//3. Iterate over every word in the array anc check if it is triangle word
//4. Check if it is triangle, by doing following:
//		 
//		a) Iterate over the alphanumeric values of a word
//		b) if the sum of the characters is present in the array
//					with all the triangles, then it is a triangle word
//		
//5. Add 1 to "trangles" variable every time a triangle word is found
//6. Return the triangles variable

//3. SOLUTION

//Start the clock to time the function
var start = new Date().getTime();

//Files and modules needed
var fs = require('fs'); //helps us read the file
var file = './words.txt'; //file we are reading

//we store evert triangle number upto 40
var trianglesArray = triangles(40); 

function solveP42(file){

	var triangles = 0;

	//read the file into a string
	var string = fs.readFileSync(file).toString();

	//place every word of the string into an element of an array
	//result looks like thi = ["hello", "world"]
	var arr = string.split(',');
	
	//for every word in the array, check if its triangle
	arr.forEach(function(item){
		if(isTriangle(item)){
			triangles++;
		} 
	});

	// console.log(arr);
	console.log("Number of triangles:%d", triangles);
	return;
}

//HELPER FUNCTIONS

//a) isTriangle(string) - returns true if a string is triangle
//b) triangles(n) - generates a list of triangles upto n. it is used by isTriangle.

//returns true if a string is triangle
function isTriangle(string){
	var sum =0;
	for (var i=0; i < string.length; i++){
		//since we iterate over strings, we only sum
		//the values of the alphanumeric characters
		if (string[i] != '"'){
			sum += string.charCodeAt(i)-64;
		}
	}
	//the highest char value is 26
	//we know the largest string < 30 letters
	//we only need to check upto 26*30 < 780 < t(n= 40)
	if (trianglesArray.indexOf(sum) != -1){
		//if the sum is present in the triangles array,
		//then the word is a triangle word
		return true;
	}
	return false;
}

function triangles(n){
	var arr =[];

	//generate triangles upto n
	for (var i=0; i< n; i++){
		arr.push(.5*i*(i+1));
	}
	return arr;
}


//CALLING THE FUNCTION

// console.log(isTriangle("SKY"));
solveP42(file);

var end = new Date().getTime();
//solution took 20 milliseconds
console.log("Time to calculate: %s milliseconds", end-start);
