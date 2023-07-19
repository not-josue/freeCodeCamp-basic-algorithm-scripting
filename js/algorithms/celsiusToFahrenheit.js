// calculates celsius to fahrenheit
export function convertCtoF(celsius) {
  // check user input
  const regex = /-*[0-9]+/g;
  const check = regex.test(celsius);
  if (check) {
    return celsius * (9 / 5) + 32;
  }
  return "Invalid input";
}
