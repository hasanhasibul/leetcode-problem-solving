const kidsWithCandies = function (candies, extraCandies) {
  const candiesMax = Math.max(...candies);

  const maxCandies = candies.map((item) => item + extraCandies >= candiesMax);
  return maxCandies;
};

const candies = [12, 1, 12];
const extraCandies = 10;

console.log(kidsWithCandies(candies, extraCandies));
