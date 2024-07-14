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
        let cardString= Array.from(Object.values(array[i]));
        console.log(cardString);
        bookCard(cardString);
    }
}
function bookCard(bookArr){
    //spliting array to indevidual objects  
    const author = bookArr[0];
    const title = bookArr[1];
    const pages = bookArr[2];
    const read = bookArr[3];
    const published = bookArr[4];

    //element creation
    const mainContainer = document.querySelector(".main-container");
    const card =document.createElement('div');
    card.classList.add("Book-Card");
    card.style.display= 'grid';
    card.textContent = `${bookArr} `;

    //creating internal book-card content
    //try foreach first
    bookArr.map(book =>{
        let bookItem =document.createElement('div');
        bookItem.classList.add('author');
        bookItem.innerHTML= `${book}`;
        bookItem.style.backgroundColor = 'yellow';
        card.appendChild(bookItem);
    })
    //author

    /*
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.innerHTML= `${author}`;
    bookAuthor.style.backgroundColor = 'yellow';
    card.appendChild(bookAuthor);
    */


    console.log(` this is the book card function , ${author}, ${title}, ${pages}, ${read}, ${published}, `)

  
  
  
    
    card.style.backgroundColor = 'green';
    //appending info into cards
    mainContainer.appendChild(card);
}

// place holder example data
let bookOne = new Book("Ekhart Tole","The Power Of Now", 300, false, 2001);
let bookTwo = new Book("Frank Herbert", "Dune", 530, true, 1987);
let bookThree = new Book("Danni Davido", "Magnum Dong", 2400, false, 2010); 

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);


displayBooks(myLibrary);