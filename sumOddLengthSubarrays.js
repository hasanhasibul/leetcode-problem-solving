const sumOddLengthSubarrays = function (arr) {
  const oddArray = [];
  let output = [];
  for (let i = 1; i <= arr.length; i += 2) {
    oddArray.push(i);
  }
  let clone = [...arr];
  oddArray.map((n) => {
    for (let i = 0; i < arr.length; i++) {
      if (n == arr.length) {
        output.push(...clone.slice(0, n + i));
        return;
      }
      if (n == 1) {
        output.push(...clone.slice(i, n + i));
      } else {
        if (i <= arr.length - n) {
          output.push(...clone.slice(i, n + i));
        }
      }
    }
  });
  return output.reduce((prev, curr) => prev + curr, 0);
};

const nums = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(nums));
