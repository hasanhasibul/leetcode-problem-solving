const countConsistentStrings = function (allowed, words) {
  const allowedStringArray = allowed.split("");

  let output = [];

  let i = 0;
  while (i < words.length) {
    const word = words[i];
    let str = "";
    for (let j = 0; j < word.length; j++) {
      const cr = word[j];
      if (allowedStringArray.includes(cr)) {
        str = str + cr;
      } else {
        str = "";
        break;
      }
    }
    i++;
    output.push(str);
  }
  return output.filter((item) => item)?.length;
};

var countConsistentStrings2 = function (allowed, words) {
  allowed = new Set(allowed);
  return words.reduce((count, word) => {
    return word.split("").every((l) => allowed.has(l)) ? ++count : count;
  }, 0);
};
const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

console.log(countConsistentStrings2(allowed, words));
