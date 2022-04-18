/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
  let output = [];
  const len = nums.length

  const dfs = (path, visited) => {
    if(path.length === len) {
      output.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[nums[i]]) continue
      visited[nums[i]] = true
      path.push(nums[i])
      dfs(path, visited)
      visited[nums[i]] = false
      path.pop()
    }
  }

  dfs([], {})
  return output
};

