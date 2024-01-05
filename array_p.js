var arr = [ 21, 25, 54, 65, 85,96 ];
console.log(arr);
var index = arr[3];
console.log(index);

arr[3] = 5000;
console.log(arr);

console.log("Length = ", arr.length);
console.log(arr.indexOf(85));

var name = [ 'Fahad', 'Rahat', 'Hafiz', 'Jaber' ];
console.log(name);
console.log("Length = ", name.length);

name.push("Boss SH");
console.log(name);
console.log("Length = ", name.length);

name.pop();
console.log(name);
console.log("Length = ", name.length);

name.shift();
console.log(name);
console.log("Length = ", name.length);

name.unshift("Boss SH");
console.log(name);
console.log("Length = ", name.length);

var div = name.slice(1, 3);
console.log(div);
// console.log(name);
// console.log("Length = ", name.length);

var age = [ 70, 85, 45, 65, 21, 19 ];
console.log(age);
var point = age.slice(3, 5);
console.log("After Slice");
console.log(point);
