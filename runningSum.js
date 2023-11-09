const runningSum = function (nums) {
  const output = [];
  let previousCount = 0;

  for (let i = 0; i < nums.length; i++) {
    output.push(previousCount + nums[i]);
    previousCount = previousCount + nums[i];
  }
  return output;
};

const nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums));
