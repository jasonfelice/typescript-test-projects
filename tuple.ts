function tuple(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
}

console.log(tuple(['hi', 27]));



type D2d3d = [number, number, number?];

function d2d3d(coord: D2d3d) {
  const [x, y, z] = coord;
  console.log(coord.length);
}

type StringNumberBoo = [string, number, ...boolean[]];
type StringNumberBoo2 = [string, boolean, ...number[]];
type StringNumberBoo3 = [boolean, number, ...string[]];

const x: StringNumberBoo = ['hello', 42, true, false, true];
const y: StringNumberBoo2 = ['world', false, 1, 2, 3];
const z: StringNumberBoo3 = [true, 99, 'extra', 'values'];

function inButton(args: [boolean, string, ...number[]]) {
    const [isEnabled, label, ...numbers] = args;
    return numbers;
}