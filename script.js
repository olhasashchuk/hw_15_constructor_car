"use strict"
function Car (make, model, year, speed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = speed;

    Object.defineProperty(this, 'age', {
        get () {
            return this.year;
        },
        set (valueYear) {
           if (valueYear<=new Date().getFullYear()) {
               this.year = valueYear;
               return valueYear;
           } else {
               return this.year;
           }
        },
    })

    Object.defineProperty(this, 'currentSpeed', {
        get () {
            return this.speed;
        },
        set (valueSpeed) {
            if (valueSpeed>0) {
                this.speed = valueSpeed;
                return valueSpeed;
            } else {
                console.log ('The speed should be more than 0');
            }
        },
    })

    this.accelerate = function (upSpeed) {
        this.currentSpeed += upSpeed;
        return this.currentSpeed;
    }

    this.brake = function (downSpeed) {
        this.currentSpeed -= downSpeed;
        return this.currentSpeed;
    }
}

const myCar = new Car('Toyota', 'Camry', 2018, 120);

console.log(`Сar is ${myCar.age} years old.`); // Сar is 2018 years old.

myCar.age = 2024;
console.log(`Сar is ${myCar.age} years old.`); // Сar is 2018 years old.

myCar.accelerate(20);
console.log(`${myCar.currentSpeed} km/h.`) // 140 km/h.

myCar.brake(10);
console.log(`${myCar.currentSpeed} km/h.`) // 130 km/h.