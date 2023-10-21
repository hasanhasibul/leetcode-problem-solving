const concatinationArray = (arr) => {
  const simillarArray = [];
  arr.map((item) => {
    simillarArray.push(item);
  });

  const concatination = arr.concat(simillarArray);
  return concatination;
};

const nums = [1, 3, 2, 1];
console.log(concatinationArray(nums));
