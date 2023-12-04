const maxProductDifference = function (nums) {
  const sortedArray = nums.sort((a, b) => b - a);
  const maxProductDif =
    sortedArray[0] * sortedArray[1] -
    sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 1];
  return maxProductDif;
};

const nums = [4, 2, 5, 9, 7, 4, 8];

console.log(maxProductDifference(nums));
