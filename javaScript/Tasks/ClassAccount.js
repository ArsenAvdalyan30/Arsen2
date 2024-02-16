class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.name = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get balance() {
    return this._balance;
  }
  set balance(value) {
    this._balance = value;
  }

  credit = function (amount) {
    this.balance = this.balance + amount;
    return this.balance;
  };

  debit = function (amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      return this.balance;
    }
    return "Amount exceeded balance";
  };

  transferTo = function (anotherAccount, amount) {
    if (amount <= this.balance) {
      this.balance = this.debit(amount);
      anotherAccount.balance = this.balance;
      return this.balance;
    }
    return "Amount exceeded balance";
  };

  static identifyAccounts(accountFirst, accountSecond) {
    if (Object.keys(accountFirst).length !== Object.keys(accountSecond).length)
      return "False: This two objects are not the same because of lengths!";
    for (let key in accountFirst) {
      if (!(key in accountSecond)) {
        return "False: This two objects are not the same because of keys!";
      } else if (!(accountSecond[key] === accountFirst[key])) {
        return "False: This two objects are not the same because of values!";
      }
    }
    return "True: This two objects are the same!";
  }
}

const account = new Account(1, "John", 1000);
const account1 = new Account(2, "Smith", 600);
const anotherAccount1 = new Account(3, "George", 0);

console.log(account.credit(3000));
console.log(account.debit(500));
console.log(account.transferTo(anotherAccount1, 300));
console.log(anotherAccount1.balance);
console.log(Account.identifyAccounts(account, account1));
