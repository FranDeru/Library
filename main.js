const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog > button');

let library = [];

showButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}. `
    }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const book2 = new Book('Hunger Games', 'P. Alfred', 397, 'already read');

function addBookToLibrary(book) {
    library.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);