const userBookmarks = [
];

class Bookmark {
    constructor (bookie){
        this.bookie = bookie;
    }
    addBookmark(bookie){
        this.bookie.push(bookie);
    }
}

const clicky = document.querySelector("#clicky")

const boxie = document.querySelector("#boxie")

const namy = boxie.value 

const ule = document.querySelector("#ule")

function append (item) {
    ule.append(item)
}

clicky.addEventListener("click",append(namy))