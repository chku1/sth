const data = [0, 1, false, 2, undefined, "", 3, null];
const removedValues = [];
let j = 0;
const compact = function (x) {
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number" && x[i] !== 0) {
      removedValues[j] = x[i];
      j++;
    }
  }
  return removedValues;
};

console.log(compact(data));
