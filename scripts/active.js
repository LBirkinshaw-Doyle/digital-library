const githubLink = document.querySelector("#github-link");
const githubLogo = document.querySelector("#github-logo");
githubLink.addEventListener("pointerenter", () => githubLogo.style.transform = "rotate(540deg)");
githubLink.addEventListener("pointerleave", () => githubLogo.style.transform = "rotate(0deg)");

const bookcase = document.querySelector("#bookcase");
const toolbar = document.querySelector("#toolbar");
const addBooksButton = document.querySelector("#add-books");

const book = {
    init: function (title, authorLast, authorOther, pages) {
        this.title = title;
        this.authorLastName = authorLast;
        this.authorOtherName = authorOther;
        this.pages = pages;
        this.read = false;
    },
    type: "book",
    toggleRead: function() {this.read ? this.read = false : this.read = true},
    info: function() {
        let information = `${this.title} was written by ${this.authorOtherName} ${this.authorLastName}. It is ${this.pages} pages long.`;
        this.read ? information += "It has been read." : information += "It still needs to be read.";
        return information;
    },
}

let bookArray = [];

document.addEventListener("click", clickEventHandler);

function clickEventHandler (e) {
    if (e.target.id === "add-books") {
        let bookTitle = prompt("What is the title of the book?");
        let bookAuthorLast = prompt("What is the author's last name?");
        let bookAuthorOther = prompt("What are the author's other names?");
        let bookPages = prompt("How many pages is the book?");

        const newBook = Object.create(book);
        newBook.init(bookTitle, bookAuthorLast, bookAuthorOther, bookPages);

        bookArray.push(newBook);
        displayLibrary();
    }
    if (e.target.id === "read-checkbox") {
        let currentBookCard = e.target.parentElement.parentElement;
        let libraryIndex = currentBookCard.dataset.libraryLocation;
        bookArray[libraryIndex].toggleRead();

        if (currentBookCard.classList.contains("read")) {
            currentBookCard.classList.remove("read");
            currentBookCard.classList.add("not-read");
        }
        else {
            currentBookCard.classList.remove("not-read");
            currentBookCard.classList.add("read");
        }
    }
    if (e.target.id === "delete-button") {
        let currentBookCard = e.target.parentElement.parentElement;
        let libraryIndex = currentBookCard.dataset.libraryLocation;
        bookArray.splice(libraryIndex, 1);
        displayLibrary();
    }
};
function displayLibrary () {
    while (bookcase.firstChild) {bookcase.removeChild(bookcase.firstChild)};
    bookArray.forEach(currentBook => {
        const bookCard = document.createElement('div');
        bookCard.classList.add("book-card");
        bookCard.dataset.libraryLocation = bookcase.childElementCount;
        currentBook.read ? bookCard.classList.add("read") : bookCard.classList.add("not-read");
        bookcase.appendChild(bookCard);

        const cardText = document.createElement('p');
        bookCard.appendChild(cardText);

        const titleEmph = document.createElement('em');
        titleEmph.textContent = 'Title: ';
        cardText.append(titleEmph, currentBook.title, document.createElement('br'));

        const authorEmph = document.createElement('em');
        authorEmph.textContent = 'Author: ';
        cardText.append(authorEmph, currentBook.authorOtherName + " " + currentBook.authorLastName, document.createElement('br'));

        const pagesEmph = document.createElement('em');
        pagesEmph.textContent = 'Pages: ';
        cardText.append(pagesEmph, currentBook.pages, document.createElement('br'));

        const readEmph = document.createElement('em');
        readEmph.textContent = 'Read: ';
        const readButton = document.createElement('input');
        readButton.type = 'checkbox';
        readButton.id = 'read-checkbox';
        cardText.append(readEmph, readButton, document.createElement('br'));        

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.id = 'delete-button';
        cardText.append(deleteButton);
    })
    
}