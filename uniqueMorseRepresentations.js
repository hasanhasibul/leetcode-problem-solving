const morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

const uniqueMorseRepresentations = function (words) {
  const output = [];
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    let byWord = [];
    for (let j = 0; j < element.length; j++) {
      const cr = element[j];
      byWord.push(morse[cr]);
    }
    output.push(byWord.join(""));
    byWord = [];
  }
  const uniqueArray = [...new Set(output)];
  return uniqueArray.length;
};

const words = ["gin", "zen", "gig", "msg"];

console.log(uniqueMorseRepresentations(words));

//  anther sulution
const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};
const uniqueMorseRepresentationsSution2 = (words) => {
  return new Set(
    words.map((word) =>
      word
        .split("")
        .map((letter) => alphabet[letter])
        .join("")
    )
  ).size;
};

console.log(uniqueMorseRepresentationsSution2(words));
