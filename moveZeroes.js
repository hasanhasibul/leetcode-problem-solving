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

const nums = [0, 0, 1];
console.log(moveZeroes(nums));
