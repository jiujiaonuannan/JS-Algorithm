/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map();
  map
    .set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000);

  let output = 0;
  for (let i = 0; i < s.length; i++) {
    let value = map.get(s[i]);

    if (value < map.get(s[i + 1])) {
      output -= value;
    } else {
      output += value;
    }
  }

  return output;
};
