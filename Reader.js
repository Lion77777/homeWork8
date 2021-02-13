class Reader {
    constructor(firstName, lastName, readerId, books) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._readerId = readerId;
        this._books = books;
    }

    get firstName() {            //
        return this._firstName;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set firstName(value) {       //
        this._firstName = value; //
    }                           //

    get lastName() {            //
        return this._lastName;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set lastName(value) {       //
        this._lastName = value; //
    }                           //

    get readerId() {            //
        return this._readerId;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set readerId(value) {       //
        this._readerId = value; //
    }                           //

    get books() {            //
        return this._books;  //
    }                           //
                                // LibraryBook quantity getter and setter
    set books(value) {       //
        this._books = value; //
    }                           //

    borrowBook(book, library) {
        if(library.doHaveBook(book) && book instanceof ReaderBook) {
            this._books.push(book);
        }
    }

    toString() {
        return this;
    }
}