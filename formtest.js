
// currently trying to append just a static data attribute to the object created in formDataObj. 

let myLibrary = [];

const form = document.getElementById("book-add");
const testIndex = document.querySelector('#bookId');

testIndex.dataset.indexNumber = "2";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    myLibrary.push(formDataObj);
})

console.log(document.querySelector('#bookId'));