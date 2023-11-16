const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (ruleKey == "type" && items[i][0] == ruleValue) {
      count = count + 1;
    }
    if (ruleKey == "color" && items[i][1] == ruleValue) {
      count = count + 1;
    }
    if (ruleKey == "name" && items[i][2] == ruleValue) {
      count = count + 1;
    }
  }
  return count;
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "color";
const ruleValue = "silver";

console.log(countMatches(items, ruleKey, ruleValue));
