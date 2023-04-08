// function hello() {
//   console.log("Hello word")
// }

// function print(callback) {
//   callback()
// }

// print(hello)

function say() {
  return "Hai"
}

function print (name, callback) {
  return name + callback()
}

const x = print("saya", say)

console.log(x)