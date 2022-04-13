/**
 * 解题思路： 回溯
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let output = [];

  const dfs = (arr, index, sum) => {
    if (sum === target) {
      output.push([...arr]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      dfs(arr, i, sum + candidates[i]);
      arr.pop();
    }
  };

  dfs([], 0, 0);

  return output;
};
