// const maximumNumberOfStringPairs = function (words) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i] === words[j].split("").reverse().join("")) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };

const maximumNumberOfStringPairs = (words) => {
  let num = 0;
  while (words.length) {
    let item = words.shift();
    item = item[1] + item[0];
    console.log(words, item);
    if (words.includes(item)) num++;
  }
  return num;
};

const words = ["aa", "ab"];
console.log(maximumNumberOfStringPairs(words));



