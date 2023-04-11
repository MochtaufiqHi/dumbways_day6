const xhr = new XMLHttpRequest()

xhr.open("method", "linkURL", "response")
// method get, post, fecth, delete
// api url
// true/false

xhr.onload = function() {} // ketika mengecek status request pada saat reload
xhr.onerror  = function() {} // ketika kondisi error akan menjalankan apa 
xhr.send()  // kirim sebuah request ke alamat server