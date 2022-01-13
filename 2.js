const data = [1, 2, 3];
const reversedData = [];
let j = 0;
const length = data.length - 1;
const reverse = function (x) {
  for (let i = length; i >= 0; i--) {
    reversedData[j] = x[i];
    j++;
  }
  return reversedData;
};

console.log(reverse(data));
