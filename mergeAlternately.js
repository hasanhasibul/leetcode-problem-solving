const mergeAlternately = function (word1, word2) {
  const word1Array = word1.split("");
  const clone = [...word1Array];
  let count = 1;
  for (let i = 0; i < word2.length; i++) {
    clone.splice(count, 0, word2[i]);
    count = count + 2;
  }
  return clone.join("");
};

const word1 = "abc";
const word2 = "pqr";

console.log(mergeAlternately(word1, word2));
