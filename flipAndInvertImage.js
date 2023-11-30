const flipAndInvertImage = function (image) {
  const reverseImage = image.map((img) => img.reverse());
  const output = reverseImage.map((item) => {
    return item?.map((it) => (it == 0 ? 1 : 0));
  });
  return output;
};

const image = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];
console.log(flipAndInvertImage(image));
