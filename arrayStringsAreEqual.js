const arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

const word1 = ["abc", "d", "defg"];
const word2 = ["abcddefg"];

console.log(arrayStringsAreEqual(word1, word2));
