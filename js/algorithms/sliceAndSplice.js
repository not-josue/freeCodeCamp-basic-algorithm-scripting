// inserts an array into an array at a given index
export function frankenSplice(input) {
  // check input
  const regex = /\[(\[(\d*,*\s*)+\],\s*){2}-*\d+\s*\]/gi;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  const [arr1, arr2, n] = JSON.parse(input);

  // check integer input
  if (n < 0) return "Index cannot be negative";
  if (n > arr2.length) return "Index cannot be greater than array length";

  // insert into array
  const main = arr2.slice(0);
  main.splice(n, 0, ...arr1);

  return `[ ${main} ]`;
}
