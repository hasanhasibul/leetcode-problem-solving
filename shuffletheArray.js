const shuffle = function (nums, n) {
  const shuffleArray = [];
  let tem = n;
  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      shuffleArray.push(nums[i], nums[tem]);
      tem = tem + 1;
    }
  }
  return shuffleArray;
};

const nums = [1, 1, 2, 2];
const n = 2;
console.log(shuffle(nums, n));
