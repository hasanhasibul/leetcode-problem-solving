const differenceOfSum = function (nums) {
  const digitArray = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    digitArray.push(...`${element}`.split(""));
  }
  return reduceSome(nums) - reduceSome(digitArray);
};

const reduceSome = (targetArray) => {
  const countotal = targetArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
  return countotal;
};
const nums = [1, 2, 3, 4];

console.log(differenceOfSum(nums));
