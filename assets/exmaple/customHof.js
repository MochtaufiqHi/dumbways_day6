function multiBy(n) {
  return function (x) {
    return x * n
  }
}

const doule = multiBy(2)
console.log(doule(5))


function logNumber(n){
  console.log(`The number is ${n}`)
}

function repeat(n, action) {
  for(let i = 0; i < n; i++){
    action(i)
  }
}

repeat(3, logNumber)
