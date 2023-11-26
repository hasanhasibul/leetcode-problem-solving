const buildArray = function (nums) {
  const result = nums.map((item, i, array) => {
    console.log(array[item]);
  });
  return result;
};

const num1 = [5, 0, 1, 2, 3, 4];
console.log(buildArray(num1));
