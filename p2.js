var start = new Date().getTime();

var fb = [];

var x =3;
var i = 2;
fb.push(1);
fb.push(2);
sum = 2;

while (x < 4000000){

	x = fb[i-1] + fb[i-2]
	fb.push(x);
	i++;

	if (x % 2 == 0){
		sum = sum +x;
	}


}

console.log(sum);

var end = new Date().getTime();
console.log("Time to compute:%s milliseconds", end - start);
