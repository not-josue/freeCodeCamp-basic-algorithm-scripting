// reverses a string
export function reverseString(str) {
  let reverse = "";
  // iterate
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
