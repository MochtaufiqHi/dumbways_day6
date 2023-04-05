class Car {
  constructor(make, model) {
    this._make = make
    this._model = model
  }
  // getter
  get make() {
    return this._make
  }

  get model() {
    return this._model
  }
}

let myCar = new Car("Toyota", "Camry")
let yourCar = new Car("Toyota", "Alphar")

myCar.make = "Honda"
myCar.model = "CRV"

console.log(myCar.make)
console.log(myCar.model)