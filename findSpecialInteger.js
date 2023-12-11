const findSpecialInteger = function (arr) {
  const uniqueCount = {};
  for (const element of arr) {
    if (uniqueCount[element]) {
      uniqueCount[element] += 1;
    } else {
      uniqueCount[element] = 1;
    }
  }

  let output;
  Object.entries(uniqueCount).map(([key, value]) => {
    if ((value / arr.length) * 100 >= 25) {
      output = Number(key);
    }
  });
  return output;
};
const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

console.log(findSpecialInteger(arr));
