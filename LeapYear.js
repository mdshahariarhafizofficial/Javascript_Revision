// Leap Year Check
let year = 3532;
if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
    console.log(year, " Is Leap Year.");
}else{
    console.log(year, " is Not! Leap Year.");
};


// Leap Year Check Using Array
let years = [1996, 1965, 1999, 2004, 2021, 2024];
for( let i = 0; i < years.length; i++ ){
    let element = years[i];
    if ( element % 4 == 0 && element % 100 != 0 || element % 400 == 0 ) {
        console.log(element, " is Leap Year.");
    }
    else{
        console.log(element, " is Not! Leap Year.");
    }
};

// Leap Year Check Using Function
function leapYearCheck(year){
    if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
        console.log(year, " Is Leap Year.");
    }else{
        console.log(year, " is Not! Leap Year.");
    };
}

leapYearCheck(1918);
leapYearCheck(4556);