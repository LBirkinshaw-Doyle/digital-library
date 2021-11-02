const githubLink = document.querySelector("#github-link");
const githubLogo = document.querySelector("#github-logo");
githubLink.addEventListener("pointerenter", () => githubLogo.style.transform = "rotate(540deg)");
githubLink.addEventListener("pointerleave", () => githubLogo.style.transform = "rotate(0deg)");

const book = {
    init: function (title, authorLast, authorOther, pages) {
        this.title = title;
        this.authorLastName = authorLast;
        this.authorOtherName = authorOther;
        this.pages = pages;
        this.read = false;
    },
    type: "book",
    toggleRead: function() {this.read? this.read = false : this.read = true;}, 
}