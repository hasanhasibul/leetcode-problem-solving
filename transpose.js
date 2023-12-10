const transpose = function (matrix) {
  const transposeMetrix = [];

  for (let i = 0; i < matrix.length; i++) {
    const innarItem = matrix[i];
    for (let j = 0; j < innarItem.length; j++) {
      if (i == 0) {
        transposeMetrix[j] = [innarItem[j]];
      } else {
        transposeMetrix[j].push(innarItem[j]);
      }
    }
  }
  return transposeMetrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix));
