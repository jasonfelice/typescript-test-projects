function root<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const rooted = root(["1", "2", "5"], (x) => parseInt(x) ** 2);