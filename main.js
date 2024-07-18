const myLibrary =[];

function Book(author, title, pageNo, read, publishDate){
    //constuctor (author/title/number of pages/read status/publish date)
    this.author = author;
    this.title = title;
    this.pageNo = pageNo;
    this.read = read;
    this.publishDate = publishDate;
}

const mainBody = document.querySelector(".main")
const mainContainer = document.querySelector(".main-container");
const addBtn = document.querySelector('.add-btn');

// dialog query selection
const dialogForm = document.querySelector('#book-item')
const dialogClose = document.querySelector|('#close')

addBtn.addEventListener('click', ()=>{
    console.log("button press detected!");

    dialogForm.showModal();
    });

function displayBooks (array){
    for(let i = 0; i < array.length; i++){
        let cardString= Array.from(Object.values(array[i]));
        //console.log(cardString);
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

    const card =document.createElement('div');
    card.classList.add("Book-Card");
    
    card.style.minWidth = '300px';
    card.style.maxWidth = '350px';
    card.style.borderRadius = '10px';
    card.style.padding = '10px'
    card.style.display= 'grid';
    card.style.backgroundColor = 'rgb(255, 255, 255)';
    card.style.justifyItems= 'center';
    card.style.borderTop= '#ff6347 solid 8px';
    card.style.boxShadow = '5px 3px 10px 1px rgba(0,0,0,0.38)';
    mainContainer.appendChild(card);

    //interactive card element:
    card.addEventListener("mouseover",()=>{
        card.style.borderTop = ' #FF9986 solid 4px';

    })
    card.addEventListener("mouseleave",()=>{
        card.style.borderTop= '#ff6347 solid 4px';
    })


    //card.textContent = `${bookArr} `;

    //creating internal book-card content
    //making unordered list
    const bookList =document.createElement('ul');
    bookList.classList.add("Book-list");
    bookList.style.display = 'grid';
    bookList.style.gridTemplateColumns = '1fr 1fr';
    bookList.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr';
    card.appendChild(bookList);
    //map to list aproach first



    
    bookArr.map((book, index)=>{

        //code for sorting by value key
        let bookKey = document.createElement('div');
        bookKey.classList.add('book-key');
        bookKey.style.paddingBottom = '5px';

        let bookItem =document.createElement('div');
        bookItem.classList.add('book-item');

        switch (index){
            case 0:
               
                bookKey.innerHTML = `Author: `;
                bookList.appendChild(bookKey);
                bookItem.innerHTML= `${book}`;
                bookList.appendChild(bookItem);
                
                break;

            case 1:
            
                bookKey.innerHTML = `title: `;
                bookList.appendChild(bookKey);
                bookItem.innerHTML= `${book}`;
                bookList.appendChild(bookItem);

                break; 

            case 2:

                bookKey.innerHTML = `pages: `;
                bookList.appendChild(bookKey);
                bookItem.innerHTML= `${book}`;
                bookList.appendChild(bookItem);

                break;

            case 3:
                
                bookKey.innerHTML = `read: `;
                bookList.appendChild(bookKey);
                bookItem.innerHTML= `${book}`;
                bookList.appendChild(bookItem);

                break;

            case 4:

                bookKey.innerHTML = `published: `;
                bookList.appendChild(bookKey);
                bookItem.innerHTML= `${book}`;
                bookList.appendChild(bookItem);

                break;
            default:   
        }
    })
}

// place holder example data
let bookOne = new Book("Ekhart Tole","Power Of Now", 300, false, 2001);
let bookTwo = new Book("Frank Herbert", "Dune", 530, true, 1987);
let bookThree = new Book("Danni Davido", "Magnum Dong", 2400, false, 2010); 

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);


displayBooks(myLibrary);