/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  let index = strs[0].length;

  while (index >= 0) {
    let isPrefix = true;
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(prefix)) {
        prefix = strs[0].substr(0, index--);
        isPrefix = false;
        break;
      }
    }

    if (isPrefix) {
      return prefix;
    }
  }

  return prefix;
};
