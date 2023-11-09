const countPairs = function (nums, target) {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        output = output + 1;
      }
    }
  }
  return output;
};

const nums = [-1, 1, 2, 3, 1];
const target = 2;

console.log(countPairs(nums, target));
