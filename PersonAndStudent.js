/***************** Person class declaration *****************/

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {            //
        return this._firstName;  //
    }                            //
                                 // Person first name getter and setter
    set firstName(value) {       //
        this._firstName = value; //
    }                            //

    get lastName() {            //
        return this._lastName;  //
    }                           //
                                // Person last name getter and setter
    set lastName(value) {       //
        this._lastName = value; //
    }                           //

    get gender() {            //
        return this._gender;  //
    }                         //
                              // Person gender getter and setter
    set gender(value) {       //
        this._gender = value; //
    }                         //

    get age() {            //
        return this._age;  //
    }                      //
                           // Person age getter and setter
    set age(value) {       //
        this._age = value; //
    }                      //

    toString() {
        return this;
    }
}

/***************** Student class declaration which inherits from Person class *****************/

class Student extends Person {
    constructor(firstName, lastName, age, gender, programm, year, fee) {
        super(firstName, lastName, gender, age);

        this._programm = programm;
        this._year = year;
        this._fee = fee;
    }

    get programm() {            //
        return this._programm;  //
    }                           //
                                // Student programm getter and setter
    set programm(value) {       //
        this._programm = value; //
    }                           //

    get year() {            //
        return this._year;  //
    }                       //
                            // Student year getter and setter
    set year(value) {       //
        this._year = value; //
    }                       //

    get fee() {            //
        return this._fee;  //
    }                      //
                           // Student fee getter and setter
    set fee(value) {       //
        this._fee = value; //
    }                      //

    passExam() {
        let isPassed = this._programm.every(prog => prog.grade >= 50);

        if(isPassed){
          this._year += 1;
        }
    }

    toString() {
        return this;
    }
}

/************ Creating Person class instance ************/

const person = new Person('Giovanni', 'Marradi', 'Male', 135);

///////////// person instance tests ///////////// 
// console.log(person.age);
// person.age = 100;
// console.log(person.age);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.gender);

// person.firstName = 'Java';
// person.lastName = 'Script';

// console.log(person.firstName);
// console.log(person.lastName);


// person.gender = 'ProgramLanguage';
// console.log(person.gender);

/************ Creating Student class instance ************/

const student = new Student('Leon', 'Avetisyan', 'Male', 28, [{programName: 'JavaScript', grade: 50}, {programName: 'React', grade: 30}, {programName: 'PHP', grade: 40}], 2, 110);

///////////// student instance tests ///////////// 

console.log(student.firstName);
console.log(student.lastName);
console.log(student.programm);
console.log(student.year);

student.passExam();
console.log(student.year);

student.programm = [{programName: 'JavaScript', grade: 100}, {programName: 'React', grade: 100}, {programName: 'PHP', grade: 100}];
student.passExam();
console.log(student.year);