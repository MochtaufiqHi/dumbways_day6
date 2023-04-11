// create a new promise 
const testimoni = new Promise((resolve, reject) => {
  // create a variable to get xml request
  const xhr = new XMLHttpRequest()
  // method open for initializes a newly created request or  re-initializes an existing one.
  xhr.open("GET", "https://api.npoint.io/61adba2362c75f81b8b6", true)
  // events occurs when an object has been loaded
  xhr.onload = function() {
    if(xhr.status == 200) {
      // resolve(xhr.response)
      resolve(JSON.parse(xhr.response))
    } else {
      reject("Error loading data")
    }
  }
  // events is triggered if an error occurs while loading an external file
  xhr.onerror = function() {
    reject("Network Error")
  }
  // send the request to the server
  xhr.send()
})


// create asyn function for show the data from server/xml api
async function getAllTestimoni() {
  const response = await testimoni
  console.log(response)

  let testimoniHtml = ""

  response.forEach((item) => {
    testimoniHtml += `<div>
    <img src=${item.image} alt="">
    <p>${item.quote}</p>
    <p><i class="fa-solid fa-star" style="color: #ffd700; margin-right: 10px;"></i>${item.rating}</p>
    <p class="author">${item.author}</p>
  </div>`
  })
  document.getElementById("testimoni").innerHTML = testimoniHtml
}

getAllTestimoni()

// function for filtering testimoni
async function filterTestimoni(rating) {
  const response = await testimoni
  let testimoniHtml = ''

  const dataFiltered = response.filter(function(data) {
    return data.rating === rating
  })
  console.log(dataFiltered)
  // show if data empty
  if(dataFiltered.length === 0) {
    testimoniHtml = `<h3> Data not found </h3>`
  } else {
    dataFiltered.forEach(function(item){
      testimoniHtml += `<div>
      <img src=${item.image} alt="">
      <p>${item.quote}</p>
      <p><i class="fa-solid fa-star" style="color: #ffd700; margin-right: 10px;"></i>${item.rating}</p>
      <p class="author">${item.author}</p>
    </div>`
    })
  }

  document.getElementById("testimoni").innerHTML = testimoniHtml
}
