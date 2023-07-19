// finds the longest word in a string and returns a number
export function findLongestWordLength(str) {
  // split string into an array
  const split = str.split(" ");
  let longest = 0;
  // iterate
  for (let i = 0; i < split.length; i++) {
    if (longest < split[i].length) longest = split[i].length;
  }
  return longest;
}
