class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    get title() {            //
        return this._title;  // Book title getter
    }                        //
                             
    get author() {            //
        return this._author;  // Book author getter
    }                         //
                              

    isTheSameBook(book) {
        let isSame = (book.title === this._title) && (book.author === this._author);
        if(isSame) {
            return true;
        }

        return false;
    }

    toString() {
        return this;
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author);

        this._bookId = bookId;
    }

    get bookId() {            //
        return this._bookId;  // Book id getter
    }                         //
                              

    toString() {
        return this;
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId);

        this._quantity = quantity;
    }

    get title() {            //
        return this._title;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set title(value) {       //
        this._title = value; //
    }                           //

    get author() {            //
        return this._author;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set author(value) {       //
        this._author = value; //
    }                           //

    get bookId() {            //
        return this._bookId;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set bookId(value) {       //
        this._bookId = value; //
    }                           //

    get quantity() {            //
        return this._quantity;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set quantity(value) {       //
        this._quantity = value; //
    }                           //

    increaseQuantityBy(amount) {
        this._quantity += amount;
        return this._quantity;
    }

    decreaseQuantityBy(amount) {
        this._quantity -= amount;
        return this._quantity;
    }

    toString() {
        return this;
    }
}

class ReaderBook extends LibraryBook {
    constructor(title, author, bookId, expirationDate, isReturned = false) {
        super(title, author, bookId);

        this._expirationDate = expirationDate;
        this._isReturned = isReturned;
    }

    get expirationDate() {            //
        return this._expirationDate;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set expirationDate(value) {       //
        this._expirationDate = value; //
    }                           //

    get isReturned() {            //
        return this._isReturned;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set isReturned(value) {       //
        this._isReturned = value; //
    }                           //

    toString() {
        return this;
    }
}