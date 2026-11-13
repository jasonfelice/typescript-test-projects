interface NumberDictionary {
  [index: string]: number;
 
  length: number;
  // name: string;
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  readonly length: number;
  name: string;
}

const obj: NumberOrStringDictionary = { length: 3, name: "Example", 0: 1, 1: 2, 2: 3 };

obj.name = "Updated";


interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown; //Can have any property with any name and any type of value 
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });

let x = { content: "Hello, World!" };

console.log(x.content as string);