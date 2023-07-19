// returns the index where a value can be inserted into an ascending integer array
export function getIndexToIns(input) {
  // check user input
  const regex = /\[(\d*,*\s*)+\],\s*\d+\s*$/g;
  const check = regex.test(input);
  console.log (check);
  if (!check) return "Invalid input";

  // extract array part
  const inputArray = input.substring(0, input.indexOf("]") + 1);
  const arr = JSON.parse(inputArray);

  // extract num part
  const inputNumb = input.substring(input.lastIndexOf(",") + 1).trim();
  const num = parseInt(inputNumb);

  // sort
  const sort = arr.sort((a, b) => {
    return a - b;
  });

  // iterate
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] >= num) return i;
  }

  return sort.length;
}
