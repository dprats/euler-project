//find all multiples of 3 or 5 under 1000
//add them up

//iterate 1 through 1000

var sum =0;

for (var i = 1; i <1000; i++){

	//if i is multiple of 3 add it
	if (i % 3 === 0 || i % 5 === 0){
		sum = sum +i;
	}
	//if i is multiple of 5 add it

}

console.log(sum);
return sum;

233168