const maximizeSum = function (nums, k) {
  const numsClone = [...nums];
  const output = [];
  for (let i = 0; i < k; i++) {
    const maxvalueIndex = numsClone?.findIndex(
      (value) => value == Math.max(...numsClone)
    );
    const lastValue = numsClone[maxvalueIndex];

    output.push(lastValue);
    numsClone.splice(maxvalueIndex, 0, lastValue + 1);
  }
  return output.reduce((pcount, currentvalue) => pcount + currentvalue, 0);
};

const nums = [5, 5, 5];
const k = 2;

console.log(maximizeSum(nums, k));
