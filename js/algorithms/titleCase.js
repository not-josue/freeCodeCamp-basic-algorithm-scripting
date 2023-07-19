// capitalizes the first letter of a word in a sentence
export function titleCase(str) {
  // split sentence into words
  const split = str.split(" ");
  let result = [];
  // iterate
  for (let i = 0; i < split.length; i++) {
    result.push(
      split[i][0].toUpperCase() +
        split[i].toLowerCase().slice(1, split[i].length)
    );
  }
  return result.join(" ");
}
