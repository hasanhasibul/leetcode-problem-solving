const compress = function (chars) {
  let output = [];
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i] && chars[i + 1] == chars[i]) {
      count = count + 1;
    } else {
      if (count > 1) {
        output.push(chars[i], `${count}`);
      } else {
        output.push(chars[i]);
      }
      count = 1;
    }
  }

  let finalOutPut = [];
  for (let i = 0; i < output.length; i++) {
    if (output[i] && output[i]?.length > 1) {
      for (let j = 0; j < output[i].length; j++) {
        finalOutPut.push(output[i][j]);
      }
    } else {
      if (output[i]) {
        finalOutPut.push(output[i]);
      }
    }
  }

  chars.splice(0, chars.length, ...finalOutPut);
  return chars.length;
};

const chars = ["a", "a", "a", "b", "b", "a", "a"];

console.log(compress(chars));
