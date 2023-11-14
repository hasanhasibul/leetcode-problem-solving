const leftRightDifference = function (nums) {
  const leftSum = [0];

  let tem = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i];
    leftSum.push(element + tem);
    tem = element + tem;
  }
  let rightTem = 0;
  const rightSum = [0];

  for (let i = nums.length - 1; i > 0; i--) {
    const element = nums[i];
    rightSum.push(element + rightTem);
    rightTem = element + rightTem;
  }

  const rightReverse = rightSum.reverse();

  const answer = [];
  for (let i = 0; i < leftSum.length; i++) {
    for (let j = 0; j < rightReverse.length; j++) {
      if (i == j) {
        answer.push(Math.abs(leftSum[i] - rightReverse[j]));
      }
    }
  }
  return answer;
};

const nums = [10, 4, 8, 3];

console.log(leftRightDifference(nums));
