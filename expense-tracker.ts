// expense.ts
interface Expense {
    id: number;
    title: string;
    amount: number;
}

class ExpenseTracker {
    private expenses: Expense[] = [];

    addExpense(title: string, amount: number): void {
        const newExpense: Expense = {
            id: Date.now(),
            title,
            amount
        };
        this.expenses.push(newExpense);
        console.log(`Added: ${title} - ${amount} BDT`);
    }

    viewTotal(): void {
        const total = this.expenses.reduce((sum, item) => sum + item.amount, 0);
        console.log("----------------------------");
        console.log(`Total Spending: ${total} BDT`);
        console.log("----------------------------");
    }

    listExpenses(): void {
        console.table(this.expenses);
    }
}

const myTracker = new ExpenseTracker();
myTracker.addExpense("Lunch", 150);
myTracker.addExpense("Bus Fare", 40);
myTracker.addExpense("Internet Bill", 500);

myTracker.listExpenses();
myTracker.viewTotal();