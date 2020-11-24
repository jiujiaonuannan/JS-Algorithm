## 二分思想的实现

```

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;

    while(low <= high) {
        var mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
};

```