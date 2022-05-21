/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (set.has(val)) {
      return val;
    }

    set.add(val);
  }

  return -1;
};
