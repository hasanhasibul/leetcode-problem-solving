const maximumWealth = function (accounts) {
  const maximumWealth = accounts?.map((item, i) => {
    return item?.reduce(
      (previousValue, currentValue, intValue) => previousValue + currentValue,
      0
    );
  });
  return Math.max(...maximumWealth);
};

const accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

console.log(maximumWealth(accounts));
