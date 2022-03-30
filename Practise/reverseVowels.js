/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const map = new Map();
  map
    .set("a", true)
    .set("e", true)
    .set("i", true)
    .set("o", true)
    .set("u", true)
    .set("A", true)
    .set("E", true)
    .set("I", true)
    .set("O", true)
    .set("U", true);

  const arr = Array.from(s);

  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (map.get(arr[l]) && map.get(arr[r])) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    } else if (map.get(arr[l]) && map.get(arr[r]) === undefined) {
      r--;
    } else {
      l++;
    }
  }

  return arr.join("");
};
