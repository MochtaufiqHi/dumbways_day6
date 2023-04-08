const data  = [ 
  {
    image: "assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg",
    comment: "pesan",
    author: "taufiq",
    rating: 3
  },
  {
    image: "assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg",
    comment: "pesan",
    author: "taufiq",
    rating: 3
  },
  {
    image: "assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg",
    comment: "pesan",
    author: "taufiq",
    rating: 3
  },
  {
    image: "assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg",
    comment: "pesan",
    author: "taufiq",
    rating: 3
  },
  {
    image: "assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg",
    comment: "pesan",
    author: "taufiq",
    rating: 1
  },
]

function showTestimoni() {
  let testimoniHtml = ''

  data.forEach((item) => {
    testimoniHtml += `<div>
    <img src=${item.image} alt="">
    <p>${item.comment}</p>
    <p>${item.rating}</p>
    <p class="author">${item.author}</p>
  </div>`
  })
  document.getElementById("testimoni").innerHTML = testimoniHtml
}
showTestimoni()

// function for filtering testimoni
function filterTestimoni(rating) {
  let testimoniHtml = ''

  const dataFiltered = data.filter(function(data) {
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
      <p>${item.comment}</p>
      <p>${item.rating}</p>
      <p class="author">${item.author}</p>
    </div>`
    })
  }

  document.getElementById("testimoni").innerHTML = testimoniHtml
}
