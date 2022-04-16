/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, target, isFindLeftIndex) => {
  const len = nums.length;
  let left = 0,
    right = len - 1,
    ans = len;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (isFindLeftIndex && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

var searchRange = function (nums, target) {
  let ans = [-1, -1];

  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false) - 1;

  if (
    leftIndex <= rightIndex &&
    rightIndex <= nums.length - 1 &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex];
  }

  return ans;
};
