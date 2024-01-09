const car = {
    name: "BMW",
    model: 800,
    color: "Red",
    weight: "572Kg",
    start: function(){
        console.log("The car is Started");
    },
    drive: function(){
        console.log("Car is Drive");
    },
    break: function(){
        console.log("Car is Break");
    },
    about: function(){
        return this.name +" "+ this.model;
    }
};
console.log(car);
console.log(car.name);
console.log(car["model"]);
car.break();
var carAbout = car.about();
console.log(carAbout);


const user = {
    name: "Fahad",
    password: 200420024,
    address: "C & B Road Barishal",
    email: "mdfahadahmad2020@gmail.com",
};

console.log(user);

// Accessing Object 
console.log();
console.log();
console.log("Accessing Object: ");
var userName = user.name; 
console.log("User Name = ",userName);

var userEmail = user["email"];
console.log("User Email = ", userEmail);

var userPassword = "password";
console.log("User Password = ",user[userPassword]);

// // Object Value Update
console.log();
console.log();
console.log("Object Value Update: ");
user.address = "Howlader Bari, Barishal Sadar";
user["name"] = "Shahariar Hafiz";
var userPassUpdate = "password";
var newPassword = user[userPassUpdate] = 50000001;

console.log(user);

// New Property Added
console.log();
console.log();
console.log("New Property Added: ");
user.education = "Computer Engeneear";
user["birthDate"] = "01-01-2005";
var newProp = "bloodGroup";
var userbloodGroup = user[newProp] = "o+";
console.log(user);