class Car {
    constructor(model, mark, country, speed = 0) {
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    };

    increaseSpeed(value) {
        this.speed += value;
        console.log(`${this.mark} ${this.model} speed increased to ${this.speed} km/h`);
    };

    decreaseSpeed(value) {
        this.speed -= value;
        console.log(`${this.mark} ${this.model} speed decreased to ${this.speed} km/h`);
    };
};

class Truck extends Car {
    takeWeight(weight) {
        console.log(`truck ${this.mark} ${this.model} take ${weight} kg`);
    };
};

class Bus extends Car {
    takePeople(people) {
        console.log(`bus ${this.mark} ${this.model} take ${people} people`);
    };
};

class Transporter extends Car {
    takeCars(cars) {
        console.log(`transporter ${this.mark} ${this.model} take ${cars} cars`);
    };
};