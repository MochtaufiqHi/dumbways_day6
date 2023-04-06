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

  constructor(picture, message, author) {
    super(picture, message)
    this.#author = author
  }

  get author() {
    return this.#author
  }
}

let author1 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")
let author2 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")
let author3 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")
let author4 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")
let author5 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")
let author6 = new TestAuthor("assets/img/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg", "this is a testimoni", "taufiq")

const items = [author1, author2, author3, author4, author5, author6]
let itemsForHtml = ""

for(let i = 0; i < items.length; i++) {
  itemsForHtml += items[i].forHtml  
}

document.getElementById("testimoni").innerHTML = itemsForHtml