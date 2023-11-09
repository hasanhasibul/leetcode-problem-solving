const numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  hours?.map((item) => {
    if (item >= target) {
      count = count + 1;
    }
  });
  return count;
};
const hours = [5, 1, 4, 2, 2];
const target = 6;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
