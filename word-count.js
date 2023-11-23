export const countWords = (string) => {
  // use regex to find and replace all punctioation and \n with spaces
  string = string.replace(/\n/g, "");
  string = string.replace(/[.,]/g, " ");
  const words = string.split(" ");
  const counts = {};
  words.forEach(word => {
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  });
  return counts;
};
