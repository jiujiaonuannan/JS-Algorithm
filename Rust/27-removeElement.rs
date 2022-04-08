/**
 * 解题思路: 双指针替换
 */
impl Solution {
	pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
			let mut left = 0;
			let mut right = nums.len() ;
			while(left < right) {
					if (nums[left] == val) {
							nums[left] = nums[right - 1];
							right -= 1;
					} else {
							left += 1;
					}
			}

			return left as i32
	}
}
