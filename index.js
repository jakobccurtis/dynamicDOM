
const bookmarkButton = document.querySelector("#bookmarkButton");

bookmarkButton.addEventListener('click', (event) => {
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
    listItem.append(hyperlink, deleteButton)
    list.append(listItem)

})