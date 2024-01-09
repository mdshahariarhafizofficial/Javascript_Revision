console.log("Convert Inch To Feet Using Function:");
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var user1 = inchToFeet(566);
console.log("Feet = ",user1);

var user2 = inchToFeet(36);
console.log("Feet = ",user2);

var user3 = inchToFeet(1000);
console.log("Feet = ",user3);

// Array & Loop

console.log("Convert Inch To Feet Using Array & Loop:");
var inch = [24, 36, 60, 80];
for(let i = 0; i<inch.length; i++){
    var element = inch[i];
    var feet = element/12;
    console.log(element+" Inch = ",feet+" Feet.");
};