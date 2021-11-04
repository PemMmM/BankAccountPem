const Account = require("../src/bank")

describe('A customer should see the current balance and the account information', () => {

    it('should return a new instance of the account', () => {
        let account = new Account ('Ahmet', 1122, 0, '$');
        expect(new Account('Ahmet', 1122, 0, '$')).toBeInstanceOf(Account);
    });


});

    describe ('A customer should deposit and see the new balance after the deposited amount', () => {

    it("shoud deposit and see the balance after the deposited amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
        ahmetsAccount.deposit(50);
        expect(ahmetsAccount.balance).toBe(50);
    });

    it("shoud deposit and see the balance after the deposited amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
        ahmetsAccount.deposit(0);
        expect(ahmetsAccount.deposit(100)).toBe('Ahmet has deposited 100 $. New balance is 100 $.');
    });


});



describe ('A customer should withdraw and see the new balance after the withdrawn amount', () => {

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 50, '$');
        ahmetsAccount.withdraw(10);
        expect(ahmetsAccount.balance).toBe(40);
    });

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 100, '$');
        ahmetsAccount.withdraw(10);
        expect(ahmetsAccount.withdraw(10)).toBe('Ahmet has withdrawn 10 $. New balance is 80 $.');
    });

    it("should throw an error when withdrawn amount is higher than the balance", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
        ahmetsAccount.withdraw(10);
        expect(ahmetsAccount.withdraw(10)).toBe('Insufficient balance, feelsbadman.');
    });

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 50, '$');
        ahmetsAccount.withdraw(40);
        expect(ahmetsAccount.balance).toBe(10);
    });

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
        ahmetsAccount.withdraw(40);
        expect(ahmetsAccount.balance).toBe(0);
    });


});

describe ('A customer should withdraw and see the new balance after the withdrawn amount', () => {

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 50, '$');
        ahmetsAccount.withdraw(10);
        expect(ahmetsAccount.withdraw(10)).toBe('Ahmet has withdrawn 10 $. New balance is 30 $.');
    });

    it("should withdraw the amount and give the balance after the given withdrawn amount", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 50, '$');
        ahmetsAccount.withdraw(50);
        expect(ahmetsAccount.withdraw(5)).toBe('Insufficient balance, feelsbadman.');
    });

   

});

describe('Function should check the current balance of the account', () => {

    it("should check the balance", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 70, '$');
        expect(ahmetsAccount.balance).toBe(70);
    });

    it("should check the balance", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 70, '$');
        expect(ahmetsAccount.checkBalance()).toBe('Your balance is 70 $.');
    });

});

describe('Function should show all the transaction history', () => {

    it("should give transaction history", () => {
    let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
    ahmetsAccount.deposit(50);
    expect(ahmetsAccount.transactionHistory()).toEqual([ 50 ]);
    });

    it("should give transaction history", () => {
        let ahmetsAccount = new Account ('Ahmet', 1234, 0, '$');
        ahmetsAccount.deposit(50);
        ahmetsAccount.withdraw(10);
        expect(ahmetsAccount.transactionHistory()).toEqual([ 50, -10 ]);
        });
    
});

