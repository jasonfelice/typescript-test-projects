const calcTotalIncome = (transactions: Transaction[]): number => {
    let income: number = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        }
    });
    console.log(`Total Income: ${income}`);
    return income;
};

const calcTotalExpenses = (transactions: Transaction[]): number => {
    let expenses: number = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'expense') {
            expenses += transaction.amount;
        }
    });
    console.log(`Total Expenses: ${expenses}`);
    return expenses;
};

const calcBalance = (transactions: Transaction[]): number => {
    const totalIncome = calcTotalIncome(transactions);
    const totalExpenses = calcTotalExpenses(transactions);
    const balance = totalIncome - totalExpenses;
    console.log(`Balance: ${balance}`);
    return balance;
};