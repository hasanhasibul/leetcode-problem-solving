const countGoodTriplets = function (array, a, b, c) {
  let goodTrippleCount = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (
          0 <= i < j < k < arr.length &&
          Math.abs(array[i] - array[j]) <= a &&
          Math.abs(array[j] - array[k]) <= b &&
          Math.abs(array[i] - array[k]) <= c
        ) {
          goodTrippleCount += 1;
        }
      }
    }
  }
  return goodTrippleCount;
};

const arr = [1, 1, 2, 2, 3],
  a = 0,
  b = 0,
  c = 1;

console.log(countGoodTriplets(arr, a, b, c));
