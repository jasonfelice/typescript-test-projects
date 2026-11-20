function root<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const rooted = root(["1", "2", "5"], (x) => parseInt(x) ** 2);


// Constraint
function smallest<Type extends { length: number }> (a: Type, b: Type) {
  return a.length < b.length ? a : b;
}

const smallestArray = smallest([1, 2, 3], [1, 2]);
const smallestString = smallest("hello", "hi");
const inCorrect = smallest([1 ,2);