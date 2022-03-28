/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const output = [];
  while (columnNumber) {
    const remain = columnNumber % 26 || 26;
    const str = String.fromCharCode(64 + remain);
    output.unshift(str);
    columnNumber = (columnNumber - remain) / 26;
  }

  return output.join("");
};
