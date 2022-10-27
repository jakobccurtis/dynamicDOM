// create bookmark class, create render and remove functions for it, create specific instance of bookmark array and push/remove to array upon click add/delete
class ListItem {
    constructor(hyperlink, deleteButton) {
        this.hyperlink = hyperlink;
    this.deleteButton = deleteButton;
    }
    

render() {
    // listItemWrapper will be returned at the end
    let listItemWrapper = document.createElement("li");
    // list of items to append to listItemWrapper: hyperlink and delete button
    const hyperlink = document.createElement("div")
    hyperlink.innerHTML = `<a href="${linkValue}">${bookmarkValue}</a>`
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<button>Delete Bookmark</button>";
    // append items to listItemWrapper
    listItemWrapper.append(hyperlink, deleteButton);
    // return listItemWrapper
    return listItemWrapper;
}
}

// Bookmarks class manages our array of listItems
class Bookmarks{
    constructor() {
        this.arrayOfBookmarks = [];
    }
// for adding a listItem to our Bookmark array
addBookmark(inputValue) {
    this.arrayOfBookmarks.push(inputValue) 
}

// Render our Bookmark to the DOM
render() {
    const list = document.querySelector("#list");
    const bookmarkBox = document.querySelector("#bookmarkBox");
    
    const bookmarkValue = bookmarkBox.value;
    const linkBox = document.querySelector("#linkBox");
    const linkValue = linkBox.value;
    const listItem = document.createElement("div")
    
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