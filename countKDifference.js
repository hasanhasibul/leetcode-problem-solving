const countKDifference = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] - nums[j] === k) {
        count += 1;
      }
    }
  }

  return count;
};

const nums = [1,3];
const k = 3;

console.log(countKDifference(nums, k));
