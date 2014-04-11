//1/1/1900 is a monday
var months = [31, 28, 31, 30,31,30,31,31,30,31,30,31];

//leap year evey 4 years, but not on century unless 
//divisible by 400

//How many sundays fell on first of the month?

//returns how many sundays fell on a number dateOfMonth
//between 1 1 1901 and 31 Dec 2000


//Generate date: (month,date, number): (1,3,85,456)
//iterate through every 7th number and check which
//has (x,1,x) style.

function leap(date){

	var num = 28;

	//if we are in leap year
		if ( (date[2] % 4 == 0) ){
			//if centenial
			if (date[2] % 100 == 0){
			// if divisible by 400 its leap
				if (date[2] % 400 == 0){
					num = 29;			
				} 
				//otherwise it is NOT a leap year
				else {
					num =28;
					console.log((date[2] % 100 ==0));
					console.log('exception! for date '+ date);
				}
			} else {
			num = 29;
			}
		}
		 else {
			num = 28;
		}
		return num;
}

function generateDays(){

	var start = [1,1,1901,0]; //1/ 1/ 1900...Monday
	var dateArr =[]; 
	var sundays =0;


	date = start;
	//generate days until (12,31,x)

	while ( (date[0] != 31) || (date[1] != 12) || (date[2] != 2000) ) {


		// console.log('about to push date:' + date);
		// dateArr.push(date);
		if ( (date[3] % 7 == 0) && (date[0] ==1) ){
			console.log('Sunday is '+ date);
			sundays++;
		}
		
		months[1] = leap(date);
		


		//if we are at the end of the month
		if (date[0] == months[date[1]-1]){

			// console.log('date is %s /%s/ %s', date[0], date[1], date[2] );
			


			//AND we are at the end of the year...
			if (date[1] > 11){
				//increase the year..
				date[2]++;
				//change month...
				date[1] = 1;
				//reset date 
				date[0] = 1;
				//increase global count
				++date[3];
			} else{
				//reset date
				date[0] = 1;
				//increase month 
				++date[1];
				//increase global count
				++date[3];
			}

		} else{
			//increase the date
			++date[0];
			//increase the global
			++date[3];
		}


	}
				
		return sundays; 
	
}

// generateDays();

console.log(generateDays());
