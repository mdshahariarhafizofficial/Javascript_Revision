var studentsRoll = [ 20, 52, 24, 85, 78, 54, 65 ];
console.log("Array Length = ", studentsRoll.length);
console.log(studentsRoll);

studentsRoll[3] = 100;
studentsRoll[6] = 1000;
console.log(studentsRoll);
console.log(studentsRoll[5]);

var possition = studentsRoll.indexOf(1000);
console.log(possition);
console.log(" ");

console.log("Student Name List ");
console.log("Before Push ");
var studentsName = [ 'Fahad', 'Hasan', 'Jamal', 'kamal', 'Rahim', 'borkot' ];
console.log("Length = ",studentsName.length);
console.log(studentsName);

console.log("After Push ");
studentsName.push('Boyra Jamal');
console.log(studentsName);


console.log("After POP ");
studentsName.pop();
console.log(studentsName);

console.log("After UnShift");
studentsName.unshift('Boss SH Vai')
console.log(studentsName);

console.log("After Shift");
studentsName.shift();
console.log(studentsName);

console.log(" ");
var age = [ 70, 85, 45, 65, 21, 19 ];
console.log(age);
var point = age.slice(3, 5);
console.log("After Slice");
console.log(point);
