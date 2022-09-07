myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

/* Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}.`
} */

Book.prototype.bookIndex = function (length = 5) {
  this.index = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    this.index += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return this.index;
};

Book.prototype.addBookToLibrary = function () {
  this.bookIndex();
  myLibrary.push(this);
};

const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  450,
  "yes, I have read it"
);
const book2 = new Book("Catch-22", "Joseph Heller", 400, "Yes, I have read it");

book1.addBookToLibrary(); // adds book1 to myLibrary array with the index as a property
book2.addBookToLibrary(); 

console.log(myLibrary);


// DOM manipulation below... 

const form = document.getElementById('book-add');
const formData = new FormData(form);

const btn = document.querySelector('#btn');
btn.onclick = () =>  {
  for (const [key, value] of formData) {
    alert(`${key}: ${value}`)
  }
}
