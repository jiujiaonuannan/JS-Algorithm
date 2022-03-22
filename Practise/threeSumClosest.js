/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = nums[leftIndex] + nums[rightIndex] + nums[i];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum === target) {
        return target;
      } else if (sum < target) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }
  return closest;
};
