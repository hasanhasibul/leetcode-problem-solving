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
const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

console.log(countConsistentStrings(allowed, words));
