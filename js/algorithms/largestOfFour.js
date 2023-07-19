// finds the largest value in subarrays and returns an array containing the largest value of each subarray
export function largestOfFour(arr) {
  // check input
  const parse = JSON.parse(arr);
  const regex = /^\[(\[(\d+(,\s*\d+)*)\])(,\s*\[(\d+(,\s*\d+)*)\])*]$/;
  const check = regex.test(arr);

  if (!check) return "Invalid input";

  let largest = [];
  // iterate
  for (let i = 0; i < parse.length; i++) {
    let current = parse[i][0];
    for (let j = 1; j < parse[i].length; j++) {
      if (parse[i][j] > current) {
        current = parse[i][j];
      }
    }
    largest.push(current);
  }
  return `[ ${largest} ]`;
}
