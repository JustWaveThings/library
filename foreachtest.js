let myLibrary = [];

function Book(title, author, pages, readStatus) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.readStatus = readStatus);
}

Book.prototype.bookIndex = function (length = 5) {
	this.index = '';
	let characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 450, 'unread');
const book2 = new Book('Catch-22', 'Joseph Heller', 400, 'unread');

book1.addBookToLibrary();
book2.addBookToLibrary();

function addBook(event) {
	event.preventDefault();
	const sample = new Book(
		formTitle.value,
		formAuthor.value,
		formPages.value,
		formRead.value
	);
	sample.addBookToLibrary();
	displayBooksInArray(myLibrary[length - 1]);
	clearForm();
	console.log(myLibrary);
}

function clearForm() {
	document.getElementById('book-add').reset();
}

function deleteBook() {
	return alert('This book will eventually be deleted');
}

function setReadStatus(event) {
	console.log(event);
}

// goal is to figure out how to make the title from each object element show up in the dom on the html page

// I wasn't able to figure out how to use this keyword with the forEach() method so I resorted to a do while loop...

let i = 0;
do {
	displayBooksInArray(myLibrary[i]);
	i++;
} while (i <= myLibrary.length - 1);

function displayBooksInArray() {
	const bookContainer = document.createElement('li');
	bookContainer.classList.add('proj-item');

	const titleLabel = document.createElement('h4');
	titleLabel.classList.add('item-desc', 'book-title');
	titleLabel.textContent = 'Title:';

	const titleValue = document.createElement('h5');
	titleValue.classList.add('item-book-title');
	titleValue.id = 'title-cont';
	// dynamic content from myLibrary array
	titleValue.textContent = myLibrary[i].title;

	const container = document.querySelector('#proj-cont');

	container.appendChild(bookContainer);
	bookContainer.appendChild(titleLabel);
	bookContainer.appendChild(titleValue);
}
