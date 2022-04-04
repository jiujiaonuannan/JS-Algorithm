/**
 * 解题思路： 排序+双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  const output = [];

  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  let l = 0;
  r = len - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) {
      output.push([nums[l], nums[r]]);
      l++;
      r--;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return output;
};
