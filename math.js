var a = 80;
var b = 45;

var sum = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

console.log("summation = ", sum);
console.log("subtraction = ", sub);
console.log("Multiplication = ", mul);
console.log("Division = ", div);
console.log("Modulus = ", mod);

// Math Round
var num_1 = 45.85556942;
var result = Math.round(num_1);
console.log("Round = ", result);

// Floor 
var num_2 = 36.999999999;
var FlOOR = Math.floor(num_2);
console.log("Floor = ", FlOOR);

// Ceil
var num_3 = 78.129999;
var CEIL = Math.ceil(num_3);
console.log("Ceil = ", CEIL);

// Random Number
var ludu = Math.random()*6;
var rLuduNum = Math.round(ludu);
console.log("Ludu Number = ", rLuduNum);