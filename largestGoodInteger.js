const largestGoodInteger = function (num) {
  const output = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      for (let k = j + 1; k < num.length; k++) {
        if (num[i] == num[j] && num[j] == num[k]) {
          output.push([num[i], num[j], num[k]]);
        } else {
          break;
        }
      }
      break;
    }
  }
  const uniqueElement = new Set(output?.map((item) => item.join("")));
  const largest =
    uniqueElement.size > 1
      ? Math.max(...uniqueElement.values())
      : uniqueElement.size == 1
      ? `${[...uniqueElement]}`
      : "";
  return largest.toString();
};

const num =
  "2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222";

console.log(largestGoodInteger(num));
