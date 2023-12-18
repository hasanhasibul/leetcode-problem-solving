const addTwoNumbers = function (l1, l2) {
  const l1Reverse = [];
  const l2Reverse = [];
  for (let i = l1.length - 1; i >= 0; i--) {
    l1Reverse.push(l1[i]);
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    l2Reverse.push(l2[i]);
  }
  const sums = Number(l1Reverse.join("")) + Number(l2Reverse.join(""));

  const sumString = `${sums}`;
  const sumReverse = [];
  for (let i = sumString.length - 1; i >= 0; i--) {
    sumReverse.push(Number(sumString[i]));
  }
  return sumReverse;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
