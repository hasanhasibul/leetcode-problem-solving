const arithmeticTriplets = (nums, diff) => {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (
          i < j < k &&
          nums[j] &&
          nums[j] - nums[i] == diff &&
          nums[k] - nums[j] == diff
        ) {
          output += 1;
        }
      }
    }
  }
  return output;
};

const nums = [4,5,6,7,8,9];
const diff = 2;

console.log(arithmeticTriplets(nums, diff));
