const truncateSentence = function (s, k) {
  const stringArray = s.split(" ");
  return stringArray.slice(0, k).join(" ");
};

const s = "chopper is not a tanuki";
const k = 5;

console.log(truncateSentence(s, k));
