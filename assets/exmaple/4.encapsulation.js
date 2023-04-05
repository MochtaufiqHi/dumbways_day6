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

  // setter 
  set make(value) {
    if (value === "") {
      console.log("the make cannot be empty")
      return
    }
    this._make
  }

  set model(value) {
    if (value === "") {
      console.log("the model cannot be empty")
      return
    }
    this._model
  }
}

let myCar = new Car("Toyota", "Camry")
myCar.make = ""
myCar.model = ""
console.log(myCar.make)
console.log(myCar.model)