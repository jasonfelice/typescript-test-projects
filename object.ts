interface NumberDictionary {
  [index: string]: number;
 
  length: number;
  name: string;
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  readonly length: number;
  name: string;
}

const obj: NumberOrStringDictionary = { length: 3, name: "Example", 0: 1, 1: 2, 2: 3 };

obj.length = 6;