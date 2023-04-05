class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }

  getInput() {
    return `This is a car ${this.make} ${this.model}`
  }
}

let myCar = new Car("Toyota", "Camry")
let yourCar = new Car("Toyota", "Alphard")

console.log(myCar.getInput())
console.log(yourCar.getInput())