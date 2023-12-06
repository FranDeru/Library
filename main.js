const dialog = document.querySelector('dialog');
const newBookBtn = document.querySelector('#new-book-btn');
const submitBtn = document.querySelector('#submitBtn');
const gridBook = document.querySelector('#grid-book');

const myLibrary = [];

newBookBtn.addEventListener('click', () => dialog.showModal());
submitBtn.addEventListener('click', () => dialog.close());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleStatus = function() {
    this.read = !this.read;
}

function toggleStatus(index) {
    myLibrary[index].toggleStatus();
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function render(){
    gridBook.innerHTML ="";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.innerHTML = `
            <h2 class="title">${book.title}</h2>
            <h3 class="author">${book.author}</h3>
            <h3 class="pages">${book.pages}</h3>
            <h3 class="read ${book.read? 'green': 'red'}"> ${myLibrary[i].read ? "Already read": "Not read"}</h3>
            <div class="option-btn">
                <button class="remove-btn" onclick="removeBook(${i})">X</button>
                <button class="toggle-btn" onclick="toggleStatus(${i})">Read ?</button>
            </div>
        `
        gridBook.appendChild(bookCard);
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

const newForm = document.querySelector('#new-book-form');
newForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary();
})