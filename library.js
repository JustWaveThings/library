/* let myLibrary = []; */

/* function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
} */

/* Book.prototype.bookIndex = function () {
  let index = myLibrary.length += 1;
  console.log()
} */
/* 
function addBookToLibrary() {
  // do stuff here
} */


/// testing basic stuff section

let myLibrary = [];

function Book(title) {
  this.title = title
}

Book.prototype.bookIndex = function () {
  const aBook = new Book(myLibrary.push(prompt("enter book title")));
  console.log(myLibrary[(myLibrary.length - 1)]);
  console.log(myLibrary.length)
}

/* Book.prototype.bookIndex()
Book.prototype.bookIndex(); */