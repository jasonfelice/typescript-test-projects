interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function fn(print: CallOrConstruct) {
  console.log(print(42)); // Call signature
  console.log(new print("2024-01-01")); // Construct signature
}