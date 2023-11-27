const largestAltitude = function (gain) {
  const output = [0];
  let restSum = 0;
  for (let i = 0; i < gain.length; i++) {
    output.push(restSum + gain[i]);
    restSum = restSum + gain[i];
  }
  return Math.max(...output);
};

const gain = [
  44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36, -85,
  -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81,
];

console.log(largestAltitude(gain));
