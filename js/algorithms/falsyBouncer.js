// removes false values from an array
export function bouncer(arr) {
    // check input
    const regex = /\[((\d*|\w*|"*),*\s*)+\]/g;
    const check = regex.test(arr);
    if (!check) return "Invalid input";

    // converts string to array
    const parse = eval(arr);

    const clean = [];
    // iterate
    for (let i in parse) {
      if (parse[i]) clean.push(parse[i]);
    }
    return `[ ${clean} ]`;
  }