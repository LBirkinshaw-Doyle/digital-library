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

addBooksButton.addEventListener("click", createForm);

function createForm () {
    toolbar.removeChild(addBooksButton);

    const form = document.createElement('form');
    form.id = "add-book-form";
    form.action = "/input-form-page";
    form.method = "post";
    toolbar.appendChild(form);

    const titleBox = document.createElement('div');
    titleBox.classList.add("form-element");
    toolbar.appendChild(titleBox);
    const titleLabel = document.createElement('label');
    titleLabel.for = "title-input";
    titleLabel.textContent = "Title: ";
    titleBox.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.id = "title-input";
    titleInput.type = "text";
    titleInput.name = "book_title";
    titleBox.appendChild(titleInput);

    const authorBox = document.createElement('div');
    authorBox.classList.add("form-element");
    toolbar.appendChild(authorBox);
    const authorLastLabel = document.createElement('label');
    authorLastLabel.for = "author-last-input";
    authorLastLabel.textContent = "Author's Last Name: ";
    authorBox.appendChild(authorLastLabel);
    const authorLastInput = document.createElement('input');
    authorLastInput.id = "author-last-input";
    authorLastInput.type = "text";
    authorLastInput.name = "book_author_last_name";
    authorBox.appendChild(authorLastInput);
    const authorOtherLabel = document.createElement('label');
    authorOtherLabel.for = "author-other-input";
    authorOtherLabel.textContent = "Author's Other Name(s): ";
    authorBox.appendChild(authorOtherLabel);
    const authorOtherInput = document.createElement('input');
    authorOtherInput.id = "author-other-input";
    authorOtherInput.type = "text";
    authorOtherInput.name = "book_author_other_name";
    authorBox.appendChild(authorOtherInput);

    const pagesBox = document.createElement('div');
    pagesBox.classList.add("form-element");
    toolbar.appendChild(pagesBox);
    const pagesLabel = document.createElement('label');
    pagesLabel.for = "pages-input";
    pagesLabel.textContent = "Number of Pages: ";
    pagesBox.appendChild(pagesLabel);
    const pagesInput = document.createElement('input');
    pagesInput.id = "pages-input";
    pagesInput.type = "text";
    pagesInput.name = "book_number_pages";
    pagesBox.appendChild(pagesInput);

    const readBox = document.createElement('div');
    readBox.classList.add("form-element");
    toolbar.appendChild(readBox);
    const readLabel = document.createElement('label');
    readLabel.for = "read-input";
    readLabel.textContent = "Read: ";
    readBox.appendChild(readLabel);
    const readInput = document.createElement('input');
    readInput.id = "read-input";
    readInput.type = "checkbox";
    readInput.name = "book_read";
    readBox.appendChild(readInput);

}