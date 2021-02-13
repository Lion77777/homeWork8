/***************** Account class declaration *****************/

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id() {
        return this._id;   // Account id getter
    }

    get name() {            //
        return this._name;  //
    }                       //
                            // Account name getter and setter
    set name(value) {       //
        this._name = value; //
    }                       //

    get balance() {            //
        return this._balance;  //
    }                          //  
                               //  Account balance getter and setter
    set balance(value) {       //  
        this._balance = value; //
    }                          //

    credit(amount) {
        this._balance += amount;
        return this._balance;
    }

    debit(amount) {
        if(amount < this._balance) {
            this._balance -= amount;
        }else {
            return 'Amount exceeded balance.';
        }
    }

    transferTo(anotherAccount, amount) {
        if(amount < this._balance) {
            this._balance -= amount;
            anotherAccount.balance += amount;
            
            return this._balance;
        }else {
            return 'Amount exceeded balance.';
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        let isIdentity = (accountFirst.id === accountSecond.id) &&          //
                         (accountFirst.name === accountSecond.name) &&      //  Checking identity
                         (accountFirst.balance === accountSecond.balance);  //
        
        if(isIdentity) {
            return true;
        }

        return false;
    }

    toString() {
        return this;
    }
}

/*********** Creating two accounts ***********/

const account1 = new Account(132, 'Lion', 500000);
const account2 = new Account(324, 'Vrezh', 500000);

/**************** Testing our Account */
console.log(account1.id);
console.log(account1.name);
console.log(account1.balance);
console.log(account2.id);
console.log(account2.name);
console.log(account2.balance);

account1.name = 'Leon';
console.log(account1.name);
console.log(account1.balance);

account1.balance = 1500000;
console.log(account1.balance);

account1.credit(1000000);
console.log(account1.balance);
console.log(account1.debit(3000000));
console.log(account1.balance);

account1.transferTo(account2, 1000000);
console.log(account1.balance, account2.balance);
