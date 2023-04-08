// forEach()
const myNumber = [1,2,3,4,5,6,7]
myNumber.forEach(function(item) {
  console.log(item)
})

// map() ubtuk memanipulasi data
const double = myNumber.map((item) => {
  return item * 2
})

// filter 
const myAge = [40, 25, 53 ,75 ,23, 23, 65 , 24]
const canJoin = myAge.filter((data) => {
  return data % 2 == 0
})

// reduce 
const reduce = myNumber.reduce((previous, current) => {
  return previous + current
}, 0)


















// function myHand(item) {

// }

// const myHand = () => {

// }

