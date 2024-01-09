let factorial = 1;
for( let i = 1; i<= 50; i++){
    factorial = factorial*i;
    console.log(i, factorial);
};

function factorials(num){
    fact = 1;
    for(let i = 1; i<= num; i++){
        fact = fact*i;
        console.log(i, fact);
    }
}

factorials(500);