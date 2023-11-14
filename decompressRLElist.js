const decompressRLElist = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    const val = nums[i + 1];
    while (freq !== 0) {
      output.push(val);
      freq--;
    }
  }

  return output;
};

const nums = [1, 1, 2, 3];

console.log(decompressRLElist(nums));
