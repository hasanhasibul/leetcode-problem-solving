const smallerNumbersThanCurrent = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) {
        count = count + 1;
      }
    }
    output.push(count);
    count = 0;
  }
  return output;
};

const nums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(nums));
