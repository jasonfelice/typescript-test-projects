const transactions: Transaction[] = [];

const addTransaction = (transaction: Transaction): void => {
  transactions.push(transaction);
};

const findTransactionById = (id: number): Transaction | undefined => {
  return transactions.find(transaction => transaction.id === id);
};

const displayTransactions = (): void => {
  console.log('Transactions:');
  transactions.forEach(transaction => {
    console.log(`ID: ${transaction.id}, Title: ${transaction.title}, Amount: ${transaction.amount}, Category: ${transaction.category}, Type: ${transaction.type}, Date: ${transaction.date.toISOString()}, Note: ${transaction.note || 'N/A'}`);
  });
};

const filterByCategory = (category: string): Transaction[] => {
  return transactions.filter(transaction => transaction.category === category);
};

const filterByType = (type: 'income' | 'expense'): Transaction[] => {
  return transactions.filter(transaction => transaction.type === type);
} 