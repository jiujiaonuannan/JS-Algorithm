/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  let output;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]);
      map.set(nums[i], count + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      output = key;
      break;
    }
  }

  return output;
};
