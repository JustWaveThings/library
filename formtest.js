let myLibrary = [];

const form = document.getElementById("book-add");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());
    
    myLibrary.push(formDataObj);
    console.log(myLibrary);
})