// create bookmark class, create render and remove functions for it, create specific instance of bookmark array and push/remove to array upon click add/delete


class Bookmarks{
    constructor() {
        this.arrayOfBookmarks = [];
    }

addBookmark(inputValue) {
    this.arrayOfBookmarks.push(inputValue)
}
render(listItem) {
    const bookmarkBox = document.querySelector("#bookmarkBox");
    const list = document.querySelector("#list");
    const bookmarkValue = bookmarkBox.value;
    const linkBox = document.querySelector("#linkBox");
    const linkValue = linkBox.value;
    const listItem = document.createElement("div")
    const hyperlink = document.createElement("div")
    hyperlink.innerHTML = `<a href="${linkValue}">${bookmarkValue}</a>`
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<button>Delete Bookmark</button>"
    list.append(listItem)
    listItem.append(hyperlink, deleteButton)
}
}


const bookmarkButton = document.querySelector("#bookmarkButton");

const bookmarks1 = new Bookmarks();

bookmarkButton.addEventListener('click', (event) => {
    bookmarks1.addBookmark(listItem)
    bookmarks1.render(listItem)
})

deleteButton.addEventListener('click', (event) => {
    listItem.remove();
})