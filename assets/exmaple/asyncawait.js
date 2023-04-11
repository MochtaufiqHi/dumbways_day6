const status = true
let promise = new Promise((resolve, reject) => {
  if(status) {
    resolve("Promise is resolved")
  } else {
    reject("Promise is reject")
  }
})

// promise
//   .then((value) => console.log(value))
//   .catch((value) => console.log(value))

async function asyncFunction() {
  const response = await promise
  console.log(response)
}

asyncFunction()