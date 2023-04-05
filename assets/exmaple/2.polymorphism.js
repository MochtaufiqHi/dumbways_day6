class Vehicle {
  drive() {
    return "The vehicle is driving"
  }
}

class Car extends Vehicle {
  drive() {
    return "The car is driving"
  }
}

class Electric extends Vehicle {
  drive() {
    return "The Electric Car is driving silently"
  }
}

let myVehicle = new Vehicle()
let myCar = new Car()
let myElectric = new Electric()

console.log(myVehicle.drive())
console.log(myCar.drive())
console.log(myElectric.drive())
