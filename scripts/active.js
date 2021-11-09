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
    toggleRead: function() {this.read ? this.read = false : this.read = true;},
    info: function() {
        let information = `${this.title} was written by ${this.authorOtherName} ${this.authorLastName}. It is ${this.pages} pages long.`;
        this.read ? information += "It has been read." : information += "It still needs to be read.";
        return information;
    },
}

let bookArray = [];

addBooksButton.addEventListener("click", addBook);

function addBook () {
    let bookTitle = prompt("What is the title of the book?");
    let bookAuthorLast = prompt("What is the author's last name?");
    let bookAuthorOther = prompt("What are the author's other names?");
    let bookPages = prompt("How many pages is the book?");

    const newBook = Object.create(book);
    newBook.init(bookTitle, bookAuthorLast, bookAuthorOther, bookPages);

    bookArray.push(newBook);
    displayLibrary();
}

function displayLibrary () {
    
}