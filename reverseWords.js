const reverseWords = function (s) {
  const str = s.trim();

  return str
    .split(" ")
    ?.filter((item) => item)
    .reverse()
    .join(" ");
};

const s = "a good   example";

console.log(reverseWords(s));
