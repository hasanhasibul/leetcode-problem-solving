const maxProduct = function (nums) {
  const sortedArray = nums.sort((a, b) => b - a);
  return (sortedArray[0] - 1) * (sortedArray[1] - 1);
};

const nums = [3,7]

console.log(maxProduct(nums));
