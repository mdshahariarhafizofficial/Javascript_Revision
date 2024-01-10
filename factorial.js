// For Loop
let factorial = 1;
for( let i = 1; i<= 10; i++){
    factorial = factorial*i;
    console.log(i, factorial);
};

// Function
function factorials(num){
    let fact = 1;
    for(let i = 1; i<= num; i++){
        fact = fact*i;
        console.log(i, fact);
    }
}
factorials(500);


// While 
let fact = 1;
let x = 1;
while( x <= 10 ){
    fact = fact*x;
    console.log(fact);
    x++;
}
