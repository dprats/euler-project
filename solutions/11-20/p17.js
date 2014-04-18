//if all the numbers from 1 to 1000 were written out
//how many letters would we use?

var h = 'hundred';
var t = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var tn = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
'eighteen', 'nineteen']
var a = ['','and'];
var d = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//get character count for any n
function getNumberString(n){

//if n = 234
// console.log('N:' +n);

	//get "two" + 'Hundred' + 'and' + 'thirty' + 'four'
	var hundreds = (n>99)? ( ((n) - (n % 100) )/100):0; //2 
	// console.log(hundreds);
	var and = (n>100 && (n % 100 > 0) )? 1:0; //1
	// console.log(and);
	var tens = ((n % 100)>19 || (n % 100) == 10)? (((n % 100) - (n%10)))/10:(0) //30
	// console.log (tens);
	var teen_holder = n % 100; //115 = 15
	var teens = ( (teen_holder) <20 && (teen_holder)>9)? (teen_holder -10):0; //0
	// console.log(teens);
	var digit = (n<10 || n>19)?(n % 10):0 //115 = 5
	// console.log(digit);

	var str = d[hundreds] + ((n>99)?h:'') + a[and] + t[tens] + tn[teens] + d[(teen_holder<20 && teen_holder>9)?(0):digit];

	console.log("N: " + n + "= " + str);
return str;

}


// console.log(getNumberString(210));
// console.log(getNumberString(45));
// console.log(getNumberString(8));
// console.log(getNumberString(342).length);
// console.log(getNumberString(100));
// console.log(getNumberString(100).length);
// console.log(getNumberString(999));

function countChars(limit){

	var sum =0;

	for (var i =1; i <=limit; i++ ){
		sum += getNumberString(i).length;

	} 

	return sum;
}

var nine = countChars(999)
console.log(nine);
var last = 'onethousand'.length;
console.log(last);
console.log(nine + last);
