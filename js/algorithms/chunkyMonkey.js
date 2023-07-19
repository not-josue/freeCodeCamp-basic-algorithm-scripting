// splits an array into subarrays
export function chunkArrayInGroups(input) {
  // check user input
  const regex = /^\[(\s*\d+,*\s*)+\],\s*\d+\s*$/g;
  const check = regex.test(input);
  if (!check) return "Invalid input";

  // extract array part
  const inputArray = input.substring(0, input.indexOf("]") + 1);
  const arr = JSON.parse(inputArray);

  // extract num part
  const inputNumb = input.substring(input.lastIndexOf(",") + 1).trim();
  const size = parseInt(inputNumb);

  const split = [];
  
  // iterate
  for (let i = 0; i < arr.length; i += size) {
    split.push(arr.slice(i, i + size));
  }

  return "[" + split.map((subarray) => "[" + subarray.join(", ") + "]") + "]";
}
