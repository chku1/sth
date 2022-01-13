const data = 3;
const valueToFill = "a";
const filledArray = [];
function fill(x, y) {
  for (let i = 0; i < x; i++) {
    filledArray[i] = y;
  }
  return filledArray;
}
console.log(fill(data, valueToFill));
