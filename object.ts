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


interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });