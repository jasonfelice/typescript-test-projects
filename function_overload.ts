interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

const transactions: Transaction[] = [
  { id: 1, title: "Salary", amount: 50000, type: "income" },
  { id: 2, title: "Groceries", amount: 2500, type: "expense" },
  { id: 3, title: "Freelancing", amount: 10000, type: "income" },
  { id: 4, title: "Electricity", amount: 1800, type: "expense" }
];

function getTransactions(id: number): Transaction | undefined;
function getTransactions(ids: number[]): Transaction[] | undefined;
function getTransactions(idOrIds: number | number[]): Transaction | Transaction[] | undefined {
    if (Array.isArray(idOrIds)) {
        return transactions.filter(transaction => idOrIds.includes(transaction.id));
    } else {
        return transactions.find(transaction => transaction.id === idOrIds);
    }
}

const first = getTransactions(1);
// Transaction | undefined

const multiple = getTransactions([1, 3]);
// Transaction[]

const missing = getTransactions(999);
// Transaction | undefined

const mixed = getTransactions([1, 999, 3]);
// Transaction[] (only matching transactions)