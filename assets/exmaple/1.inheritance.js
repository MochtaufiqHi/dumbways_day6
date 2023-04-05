class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }

  getInput() {
    return `This a car ${this.model} ${this.model}`
  }
}

class Electric extends Car {
  constructor(make, model, energy) {
    super(make, model)
    this.energy = energy
  }

  getInput() {
    return `${super.getInput()} It is a battery capacity ${this.energy} kwh.`
  }
}

let myCar = new Car("Toyota", "Camry")
let yourCar = new Car("Toyots", "Alphard")
let electric = new Electric("Tesla", "Model C", 2000)

console.log(myCar.getInput())
console.log(yourCar.getInput())
console.log(electric.getInput())