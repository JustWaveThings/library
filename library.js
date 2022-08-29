let myLibrary = [];

function Book() {
}


Book.prototype.title = function () {
  return prompt("What is the title of the book?")
}
Book.prototype.author= function () {
  return prompt("What is the author of the book?");
};
Book.prototype.pages = function () {
  return prompt("How many pages are in the book?");
};
Book.prototype.read = function () {
  return prompt("Have you read the book?");
};

/* Book.prototype.bookIndex = function(length = 5) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } */

function addBookToLibrary(index = "555") {
  let title = new Book.prototype.title()
  myLibrary.push(title);
  myLibrary.push(index);
}

