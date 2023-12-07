const productExceptSelf = function (nums) {
  const prefix = [1];
  const suffix = [1];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[i - 1] * nums[i - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix.push(suffix[suffix.length - 1] * nums[i + 1]);
  }
  suffix.reverse();

  const suff = [];
  for (let i = 0; i < prefix.length; i++) {
    const zeroCheck = prefix[i] * suffix[i] == 0 ? 0 : prefix[i] * suffix[i];
    suff.push(zeroCheck);
  }
  return suff;
};
const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
