class Account {
    constructor(ledger, name) {
        this.ledger = ledger;
        this.name = name;
    }
get tarifa(){
    return 0.01;}
    send(receiver, amount, reference) {
        this.ledger.addTransaction(new Transaction(this, receiver, amount, reference));
        this.ledger.addTransaction(new Transaction(this, this.ledger.bankAccount, this.tarifa, "Transaction Fee"));
    }

    get amount() {
        return this.ledger.calculateAmountForAccount(this);
    }

    get transactions() {
        return this.ledger.findTransactionsForAccount(this);
    }

    toString() {
        return `${this.name} ${this.amount}`;
    }
}

class BusinessAccount extends Account {
    constructor(ledger, name) {
        super(ledger, name);
    }
        get tarifa()
{        return 0.02;}

}

class Ledger {
    constructor() {
        this.transactions = [];
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    calculateAmountForAccount(account) {
        return this.transactions.reduce((amount, transaction) => {
            if (transaction.sender == account) {
                amount -= transaction.amount;
            }
            if (transaction.receiver == account) {
                amount += transaction.amount;
            }
            return amount;
        }, 0);
    }

    findTransactionsForAccount(account) {
        return this.transactions.filter(transaction => {
            if (transaction.sender == account || transaction.receiver == account) {
                return true;
            } else {
                return false;
            }
        });
    }
}
class Transaction {
    constructor(sender, receiver, amount, reference) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.reference = reference;
    }
}

ledger = new Ledger();

// setup bank account and wire to to the ledger (for transaction fees)
bankAccount = new Account(ledger, "Deutsche Bank");
ledger.addTransaction(new Transaction(null, bankAccount, 1000000, "Initial Amount"));
ledger.bankAccount = bankAccount;

// setup private account
privateAccount = new Account(ledger, "Sebastian Deutsch");
ledger.addTransaction(new Transaction(null, privateAccount, 100, "Initial Amount"));

// setup private account
anotherPrivateAccount = new Account(ledger, "Mathias Schäfer");
ledger.addTransaction(new Transaction(null, anotherPrivateAccount, 100, "Initial Amount"));

// setup company account
companyAccount = new BusinessAccount(ledger, "9elements GmbH");
ledger.addTransaction(new Transaction(null, companyAccount, 1000, "Initial Amount"));




