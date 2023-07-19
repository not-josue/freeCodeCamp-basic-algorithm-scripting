// checks if a string ends with a string i.e. Bastian, an returns true
export function confirmEnding(input) {
  // checks user input twice
  const regex = /(\s*\w+\s*)+,(\s*\w+)/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  const split = input.toLowerCase().split(",");
  if (split.length !== 2) return "Invalid input";

  // split input into parts
  const str = split[0].trim();
  const target = split[1].trim();

  const slicedString = str.slice(str.length - target.length);
  return slicedString === target;
}
