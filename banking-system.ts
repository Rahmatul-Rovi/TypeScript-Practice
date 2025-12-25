// bank.ts
class BankAccount {
    private balance: number;
    public readonly owner: string;

    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}. Remaining Balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds!");
        }
    }

    getBalance(): void {
        console.log(`${this.owner}'s Current Balance: $${this.balance}`);
    }
}

const myAccount = new BankAccount("Zubayer", 500);
myAccount.deposit(200);
myAccount.withdraw(100);
myAccount.getBalance();