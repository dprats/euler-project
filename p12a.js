function findDivisors(){
	for (var i = 1; true; i++){
		
		var triangle =0;
		//get triangle number
		var triangle = i*(i+1)/2;

		var factors = 0;
		//counting factors
		for (var k =1; k <=Math.sqrt(triangle); k++){
			if (triangle % k ==0){
				factors++;
			}
		}

		factors = factors*2;

		//if factors are bigger than 499... exit
		if (factors > 499){
			console.log('triangle: ' + triangle);
			console.log('factors: ' + factors);
			return triangle;
		}

	}
}

findDivisors();