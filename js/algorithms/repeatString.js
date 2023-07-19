// repeats a string for x number of times e.g. abc, 3
export function repeatStringNumTimes(input) {
  // check user input
  const regex = /\s*.+\s*,\s*-*\d+\s*/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  // split user input
  const split = input.split(",");
  if (split.length !== 2) return "Invalid input";
  const str = split[0].trim();
  const num = split[1].trim();

  // iterate
  if (num <= 0) return "empty string";
  let repeated = "";
  for (let i = 1; i <= num; i++) {
    repeated += str;
  }
  return repeated;
}
