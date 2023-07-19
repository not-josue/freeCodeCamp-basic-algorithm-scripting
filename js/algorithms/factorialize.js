// calculates the factorial of a number i.e. 3 * 2 * 1
export function factorialize(num) {
  // check user input
  if (isNaN(num) || num < 0) {
    return "Invalid input";
  }
  let result = 1;
  // iterate
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}
