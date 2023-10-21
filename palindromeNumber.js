const isPalindrome = function (x) {
  const xArray = `${x}`.split("");
  const reverString = xArray.reverse().join("");
  if (x == Number(reverString)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(101));
