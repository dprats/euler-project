grid = [20,20];

function path(grid){

	var path = [[0]];
	//initialize
	// path[0][0] = 0;
	// path[0][1] = 1;
	// path.push([2]);
	// path[1][0] = 1;



	console.log(path[0][0] +' should be zero');
	//initialize the entire grid
	for (var i =0; i <=grid; i++){
		for (var j =0; j <=grid; j++){
			path.push([1]);
		}
	}

	for (var j =1; j <=grid; j++){
		(path[0]).push(1);
	}

	console.log(path[5][0] +' should be 1 to the right');
	console.log(path[0][1] +' should be 1 down');
	// console.log(path[0]);
	// path[0].push(1);
	// console.log(path);

	// console.log(path[1][0]);	
	// console.log('x:' + path[0][1]);


	for (var i = 1; i<=grid; i++ ){

		for (var j = 1; j <=grid; j++){
			//first loop: path[1[1]] = path[0[1]] + path[1[0]]
			//(1,2)
			//2nd loop: path[1[2]] = path[0[2]] + path[1[1]]

			path[i][j] = path[i-1][j] +path[i][j-1];
			console.log('path['+(i-1)+']['+j+']:' + path[i-1][j]);
			console.log('path['+i+']['+(j-1)+']:' + path[i][j-1]);
			console.log('('+i+','+j+'): ' + '('+(i-1)+','+j+')+('+i+','+(j-1)+')');
			console.log('('+i+','+j+'): ' + path[i][j]);
			
		}

	}

	

	return path[grid-1][grid-1];

}



var arr = path(20);
console.log(arr);
