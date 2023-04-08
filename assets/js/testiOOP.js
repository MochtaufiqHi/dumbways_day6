class Test {
  #picture = ""
  #message = ""


  constructor(picture, message){
    this.#picture = picture
    this.#message = message
  }
  // getter 
  get picture() {
    return this.#picture
  }

  get message() {
    return this.#message
  }

  get forHtml() {
    return `<div>
    <img src="${this.picture}" alt="">
    <p>${this.message}</p>
    <p>${this.rating}</p>
    <p class="author">${this.author}</p>
  </div>`
  }

  // setter
  // set picture(value) {
  //   this._picture
  // }

  // set message(value) {
  //   this._message
  // }

  // set author(value) {
  //   this._author
  // }
}

class TestAuthor extends Test {
  #author = ""
  #rating = ""

  constructor(picture, message, author, rating) {
    super(picture, message)
    this.#author = author
    this.#rating = rating
  }

  get author() {
    return this.#author
  }

  get rating() {
    return this.#rating
  }
}

let author1 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 1)
let author2 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 2)
let author3 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 4)
let author4 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 5)
let author5 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 5)
let author6 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq", 2)

const items = [author1, author2, author3, author4, author5, author6]
let itemsForHtml = ""

for(let i = 0; i < items.length; i++) {
  itemsForHtml += items[i].forHtml  
}

document.getElementById("testimoni").innerHTML = itemsForHtml
