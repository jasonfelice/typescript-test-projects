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