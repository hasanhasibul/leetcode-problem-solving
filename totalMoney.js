const totalMoney = function (n) {
  const division = Math.floor(n / 7);
  const remaider = n % 7;
  let weekNo = remaider > 0 ? division + 1 : division;
  let weekCount = 0;
  let day = 0;
  let sum = 0;
  for (i = 1; i <= n; i++) {
    if (weekCount < weekNo) {
      sum = sum + (i - 7 * weekCount + weekCount);
      day = day + 1;
    }
    if (day === 7) {
      weekCount = weekCount + 1;
      day = 0;
    }
  }
  return sum;
};

const n = 4;
console.log(totalMoney(n));
