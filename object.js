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
console.log(car.name);
console.log(car["model"]);
car.break();
var carAbout = car.about();
console.log(carAbout);


