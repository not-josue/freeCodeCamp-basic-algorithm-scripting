// checks if the first string in the array contains all the letters of the second string in the array
export function mutation(input) {
  // check user input
  const regex = /^\[\s*"\w+"\s*,\s*"\w+"\s*\]$/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  // parse input
  const arr = JSON.parse(input);

  const base = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  // iterate
  for (let i = 0; i < test.length; i++) {
    if (base.indexOf(test[i]) < 0) return false;
  }
  return true;
}
