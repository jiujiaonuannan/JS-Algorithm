impl Solution {
	pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
			let len = candidates.len();
			let mut result = Vec::new();
			let mut path = Vec::with_capacity(len);

			fn dfs(current_sum: i32, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>, last_index: usize, target: i32, len: usize, candidates: &[i32]) {
					use std::cmp::Ordering::*;
					match current_sum.cmp(&target) {
							Equal => result.push(path.to_vec()),
							Less => {
									for i in last_index..len {
											let num = candidates[i];
											path.push(num);
											dfs(current_sum + num, path, result, i, target, len, candidates);
											path.pop();
									}
							},
							Greater => {}
					}
			}
			dfs(0, &mut path, &mut result, 0, target, len, &candidates);
			result
	}