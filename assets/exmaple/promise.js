// promise (janji)
// object yang mempresentasikan keberhasilan dan kegagalan sebuah peristiwa pada asynchronus di masa yang datang
// janji ( terpenuhi , ingkar)
// status (fulfilled, rejected, pending)
// callback (resolve, reject, finnaly)
// action (then , catch)

//example 
const status = true
let promise = new Promise((resolve, reject) => {
  if(status) {
    resolve("Promise is resolved")
  } else {
    reject("Promise is reject")
  }
})

promise
  .then((value) => console.log(value))
  .catch((value) => console.log(value))
