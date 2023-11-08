const numIdenticalPairs = function (nums) {
  let goodPair = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        goodPair = goodPair + 1;
      }
    }
  }
  return goodPair;
};

const num = [1, 1, 1, 1];

console.log(numIdenticalPairs(num));
