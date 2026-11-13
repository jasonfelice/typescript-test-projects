const transactions: Transaction[] = [];

const addTransaction = (transaction: Transaction): void => {
  transactions.push(transaction);
};

const findTransactionById = (id: number): Transaction | undefined => {
  const transactionById: Transaction | undefined = transactions.find(transaction => transaction.id === id);
  return transactionById;
};

const displayTransaction = (transaction: Transaction): void => {
  console.log(`ID: ${transaction.id}, Title: ${transaction.title}, Amount: ${transaction.amount}, Category: ${transaction.category}, Type: ${transaction.type}, Date: ${transaction.date}, Note: ${transaction.note || 'N/A'}`);
};

const displayTransactions = (): Transaction[] => {
  console.log('All Transactions:');
  transactions.forEach(transaction => {
    displayTransaction(transaction);
  });
  return transactions;
};

const filterByCategory = (category: string): Transaction[] => {
  const transactionsInCategory: Transaction[] = transactions.filter(transaction => transaction.category === category);
    console.log('Transactions By Category:');
    transactionsInCategory.forEach(transaction => {
      displayTransaction(transaction);
    });
  return transactionsInCategory;
};

const filterByType = (type: 'income' | 'expense'): Transaction[] => {
  const transactionsByType: Transaction[] = transactions.filter(transaction => transaction.type === type);
    console.log('Transactions By Type:');
    transactionsByType.forEach(transaction => {
      displayTransaction(transaction);
    });
  return transactionsByType;
} 