/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let output = [];
  const dfs = (path, index) => {
    if (path.length === k) {
      output.push([...path]);
      return;
    }

    for (let i = index; i <= n; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  };

  dfs([], 1);

  return output;
};
