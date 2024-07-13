const myLibrary =[];

function Book(author, title, pageNo, read, publishDate){
    //constuctor (author/title/number of pages/read status/publish date)
    this.author = author;
    this.title = title;
    this.pageNo = pageNo;
    this.read = read;
    this.publishDate = publishDate;
}
function addBookToLibrary(){
    //do stuff here
}
function displayBooks (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
let bookOne = new Book("Ekhart Tole","The Power Of Now", 300, false, 2001,);

let bookTwo = new Book("Frank Herbert", "Dune", 530, true, 1987,);

let bookThree = new Book("Danni Davido", "Magnum Dong", 2400, false, 2010,); 

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);
displayBooks(myLibrary);