const isAcronym = function (words, s) {
  let output = [];
  const sArray = s.split("");

  if (words.length !== sArray.length) {
    output.push(false);
  } else {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < sArray.length; j++) {
        if (i == j) {
          output.push(words[i].startsWith(sArray[j]));
        }
      }
    }
  }

  return output.filter((item) => !item)?.length > 0 ? false : true;
};

const words = ["never","gonna","give","up","on","you"],
  s = "ngguoy";

console.log(isAcronym(words, s));
