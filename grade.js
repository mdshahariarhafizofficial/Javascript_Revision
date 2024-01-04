var mark = 71;

if (mark > 100) {
    console.log("Please Enter Valid Mark...");
}else{
    if (mark >= 80) {
        console.log("You Got = A+");
    }else if (mark >= 70) {
        console.log("You Got = A");
    }
    else if (mark >= 60) {
        console.log("You Got = B");
    }
    else if (mark >= 50) {
        console.log("You Got = C");
    }
    else if (mark >= 40) {
        console.log("You Got = D");
    }
    else if (mark >= 33) {
        console.log("You Got = E");
    }
    else{
        console.log("You are Fail");
    }
}