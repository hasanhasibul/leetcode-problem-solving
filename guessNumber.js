const guessNumber = function (n, pick) {
  let left = 0;
  let right = n;

  const guess = (nums) => {
    if (nums > pick) {
      return -1;
    }
    if (pick > nums) {
      return 1;
    }
    if (pick == nums) {
      return nums;
    }
  };
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (guess(mid) == 0) return n;
    if (guess(mid) == -1) right = mid - 1;
    if (guess(mid) == 1) left = mid + 1;
  }
  return left;
};
const n = 10;
const pick = 6;

console.log(guessNumber(n, pick));
