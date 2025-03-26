function Car(carModel, year, color, price){
    this.carModel = carModel;
    this.year = year;
    this.color = color;
    let _price = price;
    this.accelerate = function(){
        console.log('Speed up....')
    };
    this.getPrice = function(){
        return _price;
    }
};

function Electric(carModel, year, color, price){
        Car.call(this, carModel, year, color, price);
        this.type = 'Electric';
        this.showCarType = function(){
            console.log(`Your car is ${this.type}`)
        }
}

function Gasoline(carModel, year, color, price){
    Car.call(this, carModel, year, color, price);
    this.type = 'Gasoline'
    this.showCarType = function(){
        console.log(`Your car is ${this.type}`)
    }
}

// Para herdar os métodos de Car corretamente
Electric.prototype = Object.create(Car.prototype);
Electric.prototype.constructor = Electric;

Gasoline.prototype = Object.create(Car.prototype);
Gasoline.prototype.constructor = Gasoline;

const Tesla = new Electric('Tesla Model S', '2025', 'red', 2000000);
console.log(Tesla);
console.log(Tesla.getPrice());
Tesla.showCarType();

const Mustang = new Gasoline('Mustang GT', '2023', 'Blue', 5000000);
console.log(Mustang);
console.log(Mustang.getPrice());
Mustang.showCarType();

const Ferrari = new Gasoline('Ferrari Purosangue', '2026', 'Red', 100000000);
console.log(Ferrari);
console.log(Ferrari.getPrice());
Ferrari.showCarType();