const diagonalSum = function (mat) {
  const primaryArray = [];
  const secondaryArray = [];

  for (let i = 0; i < mat.length; i++) {
    primaryArray.push(mat[i][i]);
  }
  if (mat.length % 2 == 1) {
    const skipItem = (mat.length + 1) / 2;
    for (let i = 0; i < mat.length; i++) {
      if (i !== skipItem - 1) {
        secondaryArray.push(mat[i][mat.length - 1 - i]);
      }
    }
  } else {
    for (let i = 0; i < mat.length; i++) {
      secondaryArray.push(mat[i][mat.length - 1 - i]);
    }
  }

  return [...primaryArray, ...secondaryArray].reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const mat = [
  [15, 13, 2, 10, 15, 7, 10, 20, 3],
  [4, 1, 12, 3, 5, 6, 6, 11, 1],
  [14, 18, 10, 14, 16, 1, 12, 4, 17],
  [8, 15, 15, 14, 18, 5, 9, 2, 7],
  [12, 14, 10, 2, 15, 16, 14, 18, 20],
  [8, 4, 1, 11, 13, 9, 4, 9, 19],
  [10, 5, 9, 11, 3, 17, 19, 1, 13],
  [7, 9, 1, 3, 7, 16, 19, 6, 11],
  [2, 11, 12, 19, 18, 18, 1, 6, 11],
];

console.log(diagonalSum(mat));
