const product = {
    iteamName: "Headphone",
    price: 1200,
    discount: 20,
    iteamCode: "F45",
};

function productDetails( name, price, discount, code){
    return {
        iteamName: name,
        price: price,
        discount: discount,
        iteamCode: code,
    };
};

let phone = productDetails("Iphone", 120000, 15, "Fahad22");
console.log(phone);


const bird = {
    name: "Parot",
    color: "Green",
    age: 5,
    fly: function(){
        console.log( this.name + " is Flying" );
    },
    sleep: function (){
        console.log(this.name + " is Sleeping");
    },
    work: function(){
            return this.name +" is "+ this.color;
    }
};
bird.fly();
bird.sleep();
bird.work();
console.log("Bird Age = " + bird['age'] +" years");

let result = bird.work();
console.log(result);