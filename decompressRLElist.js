const decompressRLElist = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[2 * i] && nums[2 * i + 1]) {
      // console.log(nums[2 * i], nums[2 * i + 1]);
      for (let k = 0; k < nums[2 * i]; k++) {
        output.push(nums[2 * i + 1]);
      }
    }
  }

  return output;
};

const nums = [1, 1, 2, 3];

console.log(decompressRLElist(nums));
