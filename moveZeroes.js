const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let smallIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallIndex] == 0) {
        smallIndex = j;
      }
    }
    if (smallIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[smallIndex];
      nums[smallIndex] = temp;
    }
  }
  return nums;
};

//another methods
// array distructure method
const moveZeroes2 = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j++;
    } else {
      [nums[i - j], nums[i]] = [nums[i], nums[i - j]];
    }
  }
  return nums;
};
const nums = [0, 0, 1];
console.log(moveZeroes2(nums));
