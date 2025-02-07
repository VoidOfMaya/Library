const myLibrary =[];

function Book(author, title, pageNo, read, publishDate){
    //constuctor (author/title/number of pages/read status/publish date)
    this.author = author;
    this.title = title;
    this.pageNo = pageNo;
    this.read = read;
    this.publishDate = publishDate;
    this.info = function(){
        console.log("this is a constructor method")
    }
}

// registering pre existing html elements  into the DOM
const mainBody = document.querySelector(".main")
const mainContainer = document.querySelector(".main-container");
const addBtn = document.querySelector('.add-btn');

// registry of a new book dialog window logic
const dialogForm = document.querySelector('#book-item');
const submitForm = document.querySelector('#submit-book');
const closeBtn =document.getElementById('close-form');
addBtn.addEventListener('click', ()=>{
    console.log("button press detected!");
    //displays dialoge
    dialogForm.showModal();
    //closes dialog

    closeBtn.addEventListener('click',()=>{
        dialogForm.close();
    })    

});
//registry  of a new book
submitForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let newBookTitle = document.getElementById('book-title').value;
    let newBookAuthor = document.getElementById('author-name').value;
    let newBookPages = document.getElementById('pages').value;
    let newBookPublish = document.getElementById('published').value;
    
    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, false, newBookPublish);
        
        
    mainContainer.innerHTML = '';
    myLibrary.push(newBook);
    displayBooks(myLibrary);

    // clear out variables for next book registry
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookPages.value = '';
    newBookPublish.value = '';
    dialogForm.close();

})
//displays book items
function displayBooks (array){
    for(let i = 0; i < array.length; i++){
        let cardString= Array.from(Object.values(array[i]));
        bookCard(cardString, i);
    }
}
//DOM book card creation
function bookCard(bookArr, bookIndex){
    //spliting array object to adressable key value pairs  
    const author = bookArr[0];
    const title = bookArr[1];
    const pages = bookArr[2];
    const read = bookArr[3];
    const published = bookArr[4];

    //element creation

    const card =document.createElement('div');
    card.classList.add("Book-Card");
    //card style
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
        card.style.borderTop= '#ff6347 solid 8px';
    })
    //making unordered list
    const bookList =document.createElement('ul');
    bookList.classList.add("Book-list");
    bookList.style.display = 'grid';
    bookList.style.gridTemplateColumns = '1fr 1fr';
    bookList.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr';
    card.appendChild(bookList);

    //removes single card
    const removeSelfBtn = document.createElement('button');
    removeSelfBtn.innerHTML= 'Remove Book!';
    removeSelfBtn.addEventListener('click',()=>{
         myLibrary.splice(bookIndex, 1);       
        mainContainer.removeChild(card);

    })
    card.appendChild(removeSelfBtn)

    //map book info to DOM Element
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
                const readBtn = document.createElement('button');
                readBtn.classList.add('read-status-window');
                readBtn.style.padding= '5px';
                readBtn.style.marginBottom='10px';
                console.log(book + ' ' + typeof(book));
                readBtn.addEventListener('click',()=>{
                let currentItem = myLibrary[bookIndex];    
                    if(book === false){
                       
                        console.log(currentItem['read']);
                        currentItem['read'] = true;
                        console.log(currentItem);
                        readBtn.style.backgroundColor = 'green';
                        readBtn.innerHTML = 'has been read';
                        
                    }
                })
                if(book){
                    readBtn.style.backgroundColor = 'green';
                    readBtn.innerHTML = `has been read`;
                    
                }else{
                    readBtn.style.backgroundColor = 'red';
                    readBtn.innerHTML = `has not been read`;
                }
                
                bookList.appendChild(readBtn);

                
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



console.log(myLibrary);

displayBooks(myLibrary);
