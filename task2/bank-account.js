//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(balance = 0) {
    if (balance >= 0) {
      this._balance = balance;
  } else {
      this._balance = 0;
  }
   
    this.isClosed = true;
  }

  open() {
    if (!this.isClosed) {
      throw new Error("Account is already open");
    }
    this.isClosed = false;
  }

  close() {
    if (this.isClosed) {
      throw new Error("Account is already closed");
    }
    this.isClosed = true; 
  }

  deposit(amount) {
    if (this.isClosed) {
      throw new Error("Cannot deposit to a closed account");
    }else if(amount < 0) {
      throw new Error("Cannot deposit a negative amount");
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (this.isClosed) {
      throw new Error("Cannot withdraw from a closed account");
    }else if (amount < 0) {
      throw new Error("Cannot withdraw a negative amount");
    }else if(amount > this._balance) {
      throw new Error("You don't have enough money for withdrawal");
    }
    this._balance -= amount;
  }

  get balance() {
    if (this.isClosed) {
      throw new Error("Cannot access balance of a closed account");
    }
    return this._balance;
  }
}


export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
