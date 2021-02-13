class Library {
    constructor(books, readers) {
        this._books = books;
        this._readers = readers;
    }

    get books() {            //
        return this._books;  //
    }                        //
                             // L
    get readers(value) {       //
        return this._readers; //
    }                        //

    doHaveBook(requestedBook) {
        let hasBook = this._books.some(book => (book.title === requestedBook.title) && (book.author === requestedBook.author));
        
        if(hasBook) {
            return true;
        }

        return false;
    }

    addBook(newBook) {
        let isExisted = this._books.some(book => (book.title === newBook.title) && (book.author === newBook.author));
        if(isExisted) {
            this._books = this._books.map(book => {
                if((book.title === newBook.title) && (book.author === newBook.author)) {
                    book.increaseQuantityBy(1);
                }
    
                return book;
            })
        }else {
            this._books.push(newBook);
        }        
    }

    addBooks(newBooks) {
        for(let i = 0; i < newBooks.length; i++) {
            this.addBook(newBooks[i]);
        }

        return this._books;
    }

    checkReaderId(readerId) {
        let isExist = this._readers.some(reader => (reader.readerId === readerId));

        if(isExist) {
            return true;
        }

        return false;
    }

    lendBook(book, readerId) {
        let isBookExists = this.doHaveBook(book);
        let isReaderExists = this.checkReaderId(readerId);
        let bId;

        if(isBookExists && isReaderExists) {
            this._books = this._books.map(book => {
                if(this.doHaveBook(book)) {
                    bId = book.bookId;
                    book.decreaseQuantityBy(1);
                }
    
                return book;
            })

            return new ReaderBook(book.title, book.author, bId, '20.02.2021', false)
        }

        
    }
}
