
class Account{
    constructor(accname,accno,balance,currency){
        this.name = accname;
        this.currency = currency;
        this.accno =accno;
        this.balance =balance;
        this.transactions = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(amount);
        return `${this.name} has deposited ${amount} ${this.currency}. New balance is ${this.balance} ${this.currency}.`;
        
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(amount * -1);
            return `${this.name} has withdrawn ${amount} ${this.currency}. New balance is ${this.balance} ${this.currency}.`;
        }else {
            return 'Insufficient balance, feelsbadman.';
        }
    }
    checkBalance() {
        return `Your balance is ${this.balance} ${this.currency}.`
        
    }
    /* transactionsHistory() {
        this.transactions.map((element, index) => {
            return console.log(`${index +1}. transaction: ${element}`);
        })
    } */ 

    transactionHistory() {
        return this.transactions;
    }
}

let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
console.log(ahmetsAccount);

// ahmetsAccount.deposit(50);
// ahmetsAccount.withdraw(40);
// console.log(ahmetsAccount.checkBalance());
// console.log(ahmetsAccount.transactionHistory());

module.exports = Account

//Requirements:
//+ user should be able to deposit funds into their account

//+ user should be able to withdraw funds from their account

//+ user should be able to check their balance

//+ user should be able to see their transaction history