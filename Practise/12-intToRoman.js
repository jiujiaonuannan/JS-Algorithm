/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let output = [];

  for (let [value, symbol] of map) {
    while (num >= value) {
      num -= value;
      output.push(symbol);
    }
  }

  return output.join("");
};
