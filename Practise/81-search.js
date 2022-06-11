/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return true;

    if (nums[mid] === nums[left]) {
      ++left;
      continue;
    }

    if (nums[mid] > nums[left]) {
      // 左侧是生序
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};
