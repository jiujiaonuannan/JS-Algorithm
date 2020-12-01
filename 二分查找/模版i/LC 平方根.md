LC x的平方根

实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var ans = -1;
  var low = 0, high = x;
  if (x = 0) return 0
  
  while(low < high) {
      var mid = Math.floor(low + (high - low) / 2);
      if (mid * mid <= x) {
          ans = mid;
          low = mid + 1
      } else {
          high = mid - 1
      }
  }

  return ans

};