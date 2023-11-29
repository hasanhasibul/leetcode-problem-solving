const sumCounts = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const slice = arr.slice(i, j + 1);
      const unique = new Set(slice);
      sum += unique.size ** 2;
    }
  }
  return sum;
};

const nums = [1, 2, 1];
console.log(sumCounts(nums));
