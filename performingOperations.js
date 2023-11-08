const finalValueAfterOperations = function (operations) {
  let count = 0;
  operations.map((item) => {
    if (item === "X++" || item === "++X") {
      count = count + 1;
    } else {
      count = count - 1;
    }
  });
  return count;
};

const operations = ["X++", "++X", "--X", "X--"];

console.log(finalValueAfterOperations(operations));
