LC 搜索旋转排序数组

升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。
请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

示例 1：
  输入：nums = [4,5,6,7,0,1,2], target = 0
  输出：4

示例 2：
  输入：nums = [4,5,6,7,0,1,2], target = 3
  输出：-1


```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  var len = nums.length;
  if(len == 0){
    return -1;
  }
  if(len == 1){
    return nums[0] == target ? 0 : -1;
  }
  var left = 0,right = len-1;
  while(left <= right){
    var mid = Math.floor(left + (right - left) / 2);
    if(nums[mid] == target){
        return mid;
    }
    if(nums[left] <= nums[mid]){ //mid左侧为有序数组
      if(nums[left] <= target && nums[mid] >= target){ //如果target在mid左侧的话
        right = mid-1;
      }else{ //在mid右侧
        left = mid+1;
      }
    }else{ //mid右侧为有序数组
      if(nums[mid] <= target && nums[right] >= target){ //如果target在mid右侧的话
        left = mid+1;
      }else{ //在mid左侧
        right = mid-1;
      }
    }
  }
  return -1;
};

```