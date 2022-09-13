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

function deleteBook(event) {
	const bookToDeletedIndex = event.currentTarget.dataset.indexValue;
	const foundIndex = myLibrary.findIndex(
		(x) => x.index === bookToDeletedIndex
	);
	myLibrary.splice(foundIndex, 1);
}

function setReadStatus(event) {
	console.log(event);
}

// creating dom elements to be populated for each book

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

	const authorLabel = document.createElement('h4');
	authorLabel.classList.add('item-desc', 'author');
	authorLabel.textContent = 'Author:';

	const authorValue = document.createElement('h5');
	authorValue.classList.add('item-author');
	authorValue.id = 'author-cont';
	// dynamic content from myLibrary array
	authorValue.textContent = myLibrary[i].author;

	const pagesLabel = document.createElement('h4');
	pagesLabel.classList.add('item-desc', 'pages');
	pagesLabel.textContent = 'Pages:';

	const pagesValue = document.createElement('h5');
	pagesValue.classList.add('item-pages');
	pagesValue.id = 'pages-cont';
	// dynamic content from myLibrary array
	pagesValue.textContent = myLibrary[i].pages;

	const readLabel = document.createElement('h4');
	readLabel.classList.add('item-desc', 'read-toggle');
	readLabel.textContent = 'Read?:';

	const readValue = document.createElement('input');
	readValue.classList.add('toggle-button');
	readValue.id = 'toggle-button';
	readValue.setAttribute('type', 'checkbox');
	readValue.setAttribute('name', 'toggle');
	// dynamic content from myLibrary array
	readValue.setAttribute('value', myLibrary[i].readStatus);
	readValue.dataset.indexValue = myLibrary[i].index;
	readValue.addEventListener('pointerup', (event) => {
		setReadStatus(event);
	});

	const deleteIcon = document.createElement('input');
	deleteIcon.setAttribute('type', 'image');
	deleteIcon.setAttribute('name', 'delete');
	deleteIcon.setAttribute('id', 'delete');
	deleteIcon.setAttribute(
		'src',
		'/library/img/delete_forever_FILL0_wght700_GRAD0_opsz24.svg'
	);
	deleteIcon.classList.add('delete');
	// dynamic content from myLibrary array
	deleteIcon.dataset.indexValue = myLibrary[i].index;
	deleteIcon.addEventListener('click', (event) => {
		deleteBook(event);
	});

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
}

// getting the form data,

const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formRead = document.getElementById('readStatus');
const formButton = document.querySelector('#btn');
formButton.addEventListener('click', (event) => {
	addBook(event);
});

console.log(myLibrary);
