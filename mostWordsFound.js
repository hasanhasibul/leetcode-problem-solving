const mostWordsFound = function (sentences) {
  let output = [];
  for (let i = 0; i < sentences.length; i++) {
    const element = sentences[i]?.split(" ")?.length;
    output.push(element);
  }

  return Math.max(...output);
};

const sentences = ["please wait", "continue to fight", "continue to win"];

console.log(mostWordsFound(sentences));
