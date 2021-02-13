/******************** Author class declaration ********************/
class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get authName() {
        return this.name;  
    }
    
    get authEmail() {
        return this.email;
    }

    get authGender() {
        return this.gender;
    }

    toString() {
        return this;
    }
}

/******************** Book class declaration ********************/

class Book {
    constructor(title, author, price, quantity) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    get bookTitle() {       //
        return this.title;  //
    }                       //
                            //  Book title getter and setter
    set bookTitle(value) {  //
        this.title = value; //
    }                       //

    // Book author getter and setter
    get bookAuthor() {
        return `The ${this.title} is written by ${this.author.name}`;                                   
    }

    set bookAuthor(value) {  // Here value is an author object with name, email and gender properties
        this.author.name = value.name;
        this.author.email = value.email;
        this.author.gender = value.gender;
    }

    get bookPrice() {       //
        return this.price;  //
    }                       //
                            //  Book Price getter and setter
    set bookPrice(value) {  //
        this.price = value; // 
    }                       //

    get bookQuantity() {       //
        return this.quantity;  //
    }                          //
                               //  Book quantity getter and setter
    set bookQuantity(value) {  //
        this.quantity = value; //
    }                          //

    getProfit() { // Method which calculates profit and returns a message 
        let profit = this.price * this.quantity;
        return `We have got $${profit} selling ${this.quantity} books.`;
    }

    toString() {
        return this;
    }
}

/************* Creating new instance from Author class *************/

const kyle = new Author('Kyle', 'kyle@simp.com', 'Male');

// console.log(kyle.name);
// kyle.name = 'Kyle Simpson';
// console.log(kyle.authName);
// console.log(kyle.toString());

/************* Creating new instance from Book class *************/

const closuresObjects = new Book('Closures&Objects', kyle, 14.5, 10);

// console.log(closuresObjects);
console.log(closuresObjects.bookAuthor);
closuresObjects.bookAuthor = {name: 'Kyle Simpson', email: 'kylesimp@simp.com', male: 'male'};
console.log(closuresObjects.bookAuthor);
console.log(closuresObjects.toString());
console.log(closuresObjects.getProfit());


