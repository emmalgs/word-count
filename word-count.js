export const countWords = (string) => {
  string = string.replace(/\n/g, "");
  string = string.replace(/[:!$@%&^]/g, "");
  string = string.replace(/[.,]/g, " ");
  const words = string.trim().split(" ");
  const counts = {};
  words.forEach((word) => {
    word = word.toLowerCase();
    if (word !== "") {
      if (word.startsWith("'")) {
        word = word.slice(1, word.length - 1);
      }
      counts[word] = counts[word] ? counts[word] + 1 : 1;
    }
  });
  return counts;
};
