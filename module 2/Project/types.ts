type TransactionType = 'income' | 'expense';

interface Transaction {
  readonly id: number;
  title: string;
  amount: number;
  category: string;
  readonly type: TransactionType;
  readonly date: Date;
  note?: string;
}