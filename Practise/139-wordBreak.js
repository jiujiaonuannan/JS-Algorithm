/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Array(s.length);

  const dfs = (index) => {
    if (index === s.length) return true;
    if (memo[index] !== undefined) return memo[index];
    for (let i = index; i <= s.length; i++) {
      const str = s.slice(index, i);
      if (wordSet.has(str) && dfs(i)) {
        memo[index] = true;
        return true;
      }
    }

    memo[index] = false;
    return false;
  };

  return dfs(0);
};
