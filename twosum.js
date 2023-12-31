const twoSum = (nums, target) => {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 5, 5, 11];
const nums1 = [2, 7, 11, 15];
const nums2 = [3, 2, 4];
const nums3 = [3, 3];
const target = 10;
const target1 = 9;
const target2 = 6;
const target3 = 6;

console.log(twoSum(nums, target));
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
