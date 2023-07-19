// checks if an integer passes a function test
export function findElement(input) {
  // check input
  const regex =
    /\s*\[(\s*\d+,*)+\],\s*num\s*=>\s*num\s*%\s*\d+\s*={2,3}\s*\d+\s*/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  // split input
  const split = input.split("],");

  // parse into an array
  const arrayStart = input.indexOf("[");
  const arrayEnd = input.indexOf("]");
  const arrayString = input.substring(arrayStart, arrayEnd + 1);
  const arr = JSON.parse(arrayString);

  // change string to function
  const func = eval(split[1]);

  // iterate
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num)) return num;
  }
  return undefined;
}
