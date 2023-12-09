const increasingTriplet = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current > second) {
      return true;
    }
    if (current > first) {
      second = current;
    } else {
      first = current;
    }
  }
  return false;
};

const nums = [5, 2, 5, 4, 0, 1];

console.log(increasingTriplet(nums));
