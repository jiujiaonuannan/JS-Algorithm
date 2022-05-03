/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let output = [];

  let len = nums.length;

  nums = nums.sort((a, b) => a - b);

  const dfs = (path, visited) => {
    if (path.length === len) {
      output.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && !visited[i - 1] && nums[i] === nums[i - 1]) {
        continue;
      }

      if (!visited[i]) {
        visited[i] = true;
        path.push(nums[i]);
        dfs(path, visited);
        visited[i] = false;
        path.pop();
      }
    }
  };

  dfs([], {});

  return output;
};
