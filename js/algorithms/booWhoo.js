// checks if a value is true or false
export function booWho(bool) {
  if (bool === "true" || bool === "false") bool = true;
  return bool === true || bool === false;
}
