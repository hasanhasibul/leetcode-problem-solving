const reverseVowels = (s) => {
  const reverseVowelsArray = s.split("");
  const vowelHash = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const vowels = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (vowelHash.includes(char)) {
      vowels.push({ index: i, vowel: char });
    }
  }
  for (let i = 0; i < vowels.length; i++) {
    const index = vowels[i].index;
    const char = vowels[vowels.length - i - 1].vowel;
    reverseVowelsArray[Number(index)] = char;
  }
  return reverseVowelsArray.join("");
};
const s = "aA";
console.log(reverseVowels(s));
