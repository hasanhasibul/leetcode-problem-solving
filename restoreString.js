const restoreString = function (s, indices) {
  let output = [];
  const sArray = s.split("");
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < sArray.length; j++) {
      if (i == j) {
        output[indices[i]] = sArray[j];
      }
    }
  }

  return output.join("");
};

const s = "abc";
const indices = [0, 1, 2];

console.log(restoreString(s, indices));
