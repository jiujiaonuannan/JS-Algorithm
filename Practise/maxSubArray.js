/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let maxAns = nums[0];

  nums.map((item) => {
    pre = Math.max(pre + item, item);
    maxAns = Math.max(pre, maxAns);
  });

  return maxAns;
};
