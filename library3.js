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

book1.addBookToLibrary();
book2.addBookToLibrary();

/* document.getElementById("title-cont").textContent = myLibrary[0].title;
document.getElementById("author-cont").textContent = myLibrary[0].author;
document.getElementById("pages-cont").textContent = myLibrary[0].pages; */

console.log(myLibrary[0])

function deleteBook() {
    return alert("This book will eventually be deleted")
}

// creating dom elements to be populated 1 for each book


const bookContainer = document.createElement('li'); // needs appended as child to ul proj - cont
bookContainer.classList.add('proj-item');

// creating elements in the bookcontainer

const titleLabel = document.createElement('h4');
titleLabel.classList.add('item-desc', 'book-title');
titleLabel.textContent = "Title:"

const titleValue = document.createElement('h5');
titleValue.classList.add('item-book-title');
titleValue.id = 'title-cont';
titleValue.textContent = "title placeholder";

const authorLabel = document.createElement('h4');
authorLabel.classList.add('item-desc', 'author');
authorLabel.textContent = "Author:";

const authorValue = document.createElement("h5");
authorValue.classList.add("item-author");
authorValue.id = "author-cont";
authorValue.textContent = "Author Placeholder";

const pagesLabel = document.createElement('h4');
pagesLabel.classList.add('item-desc', 'pages');
pagesLabel.textContent = "Pages:";

const pagesValue = document.createElement("h5");
pagesValue.classList.add('item-pages');
pagesValue.id = "pages-cont";
pagesValue.textContent = "pages placeholder";


const readLabel = document.createElement('h4');
readLabel.classList.add('item-desc', 'read-toggle');
readLabel.textContent = "Read?:"

const readValue = document.createElement('input');
readValue.classList.add('toggle-button');
readValue.id = "toggle-button";
readValue.setAttribute('type', 'checkbox');
readValue.setAttribute("name", "toggle");




const deleteIcon = document.createElement('img');
deleteIcon.setAttribute('src','/library/img/delete_forever_FILL0_wght700_GRAD0_opsz24.svg')
deleteIcon.setAttribute('onclick', 'deleteBook()');
deleteIcon.classList.add('delete');


    
// structuring dom nodes


const container = document.querySelector('#proj-cont');

container.appendChild(bookContainer);
bookContainer.appendChild(titleLabel);
bookContainer.appendChild(titleValue);
bookContainer.appendChild(authorLabel);
bookContainer.appendChild(authorValue);
bookContainer.appendChild(pagesLabel);
bookContainer.appendChild(pagesValue);
bookContainer.appendChild(readLabel);
bookContainer.appendChild(readValue);
bookContainer.appendChild(deleteIcon);

