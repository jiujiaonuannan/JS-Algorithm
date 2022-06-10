/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  const swap = (a, b) => {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };

  let current = 0;
  while (current <= right) {
    if (nums[current] === 0) {
      swap(current, left);
      left++;
      current++;
    } else if (nums[current] === 2) {
      swap(current, right);
      right--;
    } else {
      current++;
    }
  }
};
