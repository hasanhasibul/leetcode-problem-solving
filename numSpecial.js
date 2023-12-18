const numSpecial = (mat) => {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[i][j] == 1 && mat[i][j] == 0) {
        count++;
      }
    }
  }
  console.log(count);
};

const mat = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];
numSpecial(mat);
