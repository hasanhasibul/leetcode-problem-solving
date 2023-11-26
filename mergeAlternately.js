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

const word1 = "ab";
const word2 = "pqrs";

// console.log(mergeAlternately(word1, word2));

/// alternative way to solve this problem

let outputString = [];
const alternativeStringMerge = (word1, word2) => {
  const maxLen = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < maxLen; i++) {
    outputString = outputString + ((word1[i] || "") + (word2[i] || ""));
  }
  return outputString;
};

alternativeStringMerge(word1, word2);
