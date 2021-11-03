//BankAccount
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
        console.info(`${this.name} has deposited ${amount} ${this.currency}. New balance is ${this.balance} ${this.currency}.`);
        this.transactions.push(amount);

    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(amount * -1);
            console.info(`${this.name} has withdrawn ${amount} ${this.currency}. New  is ${this.balance} ${this.currency}.`);
        }else {
            throw 'Insufficient balance, feelsbadman.';
        }
    }
    checkBalance() {
        return `Your balance is ${this.balance}.`
        
    }
    transactionsHistory() {
        this.transactions.map((element, index) => {
            return console.log(`${index +1}. transaction: ${element}`);
        })
    }
}
module.exports=Account
//Requirements:
//+ user should be able to deposit funds into their account

//+ user should be able to withdraw funds from their account

//+ user should be able to check their balance

//+ user should be able to see their transaction history