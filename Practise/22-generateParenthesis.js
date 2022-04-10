/**
 * 解题思路: DFS
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let output = [];

  const dfs = (leftRemain, rightRemain, str) => {
    if (str.length === 2 * n) {
      output.push(str);
      return;
    }

    if (leftRemain > 0) {
      dfs(leftRemain - 1, rightRemain, str + "(");
    }

    if (rightRemain > leftRemain) {
      dfs(leftRemain, rightRemain - 1, str + ")");
    }
  };

  dfs(n, n, "");

  return output;
};
