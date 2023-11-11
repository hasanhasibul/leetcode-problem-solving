const createTargetArray = function (nums, index) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < index.length; j++) {
      if (i === j) {
        output.splice(index[j], 0, nums[i]);
      }
    }
  }
  return output;
};

const nums = [1, 2, 3, 4, 0];
const index = [0, 1, 2, 3, 0];
console.log(createTargetArray(nums, index));
