const Account = require("./bank")

describe('A customer should see the current balance and the account information', () => {
    test('a customer should have an account object', () => {
        let account = new Account ('Ahmet', 1122, 0, '$');
        expect(new Account('Ahmet', 1122, 0, '$')).toBeInstanceOf(Object);
    });
    test('the bank account has an owner name', () => {
       
    });
})
