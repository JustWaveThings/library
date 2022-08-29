myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}.`
}

Book.prototype.bookIndex = function (length = 5) {
  this.index = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    this.index += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return this.index
};

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 450, "yes, I have read it")
const book2 = new Book("Catch-22", "Joseph Heller", 400, "Yes, I have read it")

function addBookToLibrary(book) {
    myLibrary.push(book);
}


//console.log(book1.info()) // The Hobbit by J.R.R. Tolkien, 450 pages, yes, I have read it.
console.log(book1)  // Book {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 450, readStatus: 'yes, I have read it'}


book1.bookIndex();
book2.bookIndex();
addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary); 
