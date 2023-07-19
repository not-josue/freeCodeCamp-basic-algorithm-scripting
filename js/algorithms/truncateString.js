// truncates a string to a given length
export function truncateString(input) {
  // check user input
  const regex = /\s*.+\s*,\s*-*\d+\s*/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  // split
  const split = input.split(",");
  if (split.length !== 2) return "Invalid input";
  const str = split[0];
  const num = split[1];

  if (num >= str.length) return str;
  return str.slice(0, num) + "...";
}
