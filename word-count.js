export const countWords = (string) => {
  const words = string.split(" ");
  const counts = {};
  words.forEach(word => {
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  });
  return counts;
};
