const userName: string = "Jake";
let expense1: number = 250;
let expense2: number = 120;
let expense3: number = 430;

interface Expense {
  name: string;
  expense1: number;
  expense2: number;
  expense3: number;
}

class ExpenseAccount implements Expense {
  name: string;
  expense1: number;
  expense2: number;
  expense3: number;

  constructor(name: string, expense1: number, expense2: number, expense3: number) {
    this.name = name;
    this.expense1 = expense1;
    this.expense2 = expense2;
    this.expense3 = expense3;
  }

  printSummary(): string {
    return `Expense Report
    Name: ${this.name} :
    -----------------------------------------
    Expense 1: $${this.expense1.toFixed(2)}
    Expense 2: $${this.expense2.toFixed(2)}
    Expense 3: $${this.expense3.toFixed(2)}
    Total: $${(this.expense1 + this.expense2 + this.expense3).toFixed(2)}
    Average: $${((this.expense1 + this.expense2 + this.expense3) / 3).toFixed(2)}
    `;
  }
}

let expenseAccount: ExpenseAccount = new ExpenseAccount(userName, expense1, expense2, expense3);
console.log(expenseAccount.printSummary());