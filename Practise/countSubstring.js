/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const strLen = s.length;
  let count = 0;
  let dp = Array.from(Array(strLen), () => Array(strLen).fill(false));

  for (let j = 0; j < strLen; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j]) {
        if (j - i < 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        count += dp[i][j] ? 1 : 0;
      }
    }
  }

  return count;
};
