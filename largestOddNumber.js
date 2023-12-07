const largestOddNumber = function (numString) {
  const num = numString;
  let str = "";
  if (Number(num.slice(num.length - 1, num.length)) % 2 > 0) {
    str = num;
  } else {
    for (let i = num.length; i >= 0; i--) {
      if (num.slice(i - 1, i) % 2) {
        str = num.slice(0, i);
        break;
      }
    }
  }
  return str;
};

const num = "239537672423884969653287101";

console.log(largestOddNumber(num));
