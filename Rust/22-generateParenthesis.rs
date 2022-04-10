impl Solution {
	fn back_trace(s: String, n: usize, left: usize, right: usize, result: &mut Vec<String>) {
			if s.len() == 2 * n {
					result.push(s);
					return;
			}

			if left < n {
					let mut s = s.to_owned();
					s.push('(');
					Self::back_trace(s, n, left + 1, right, result)
			}

			if left > 0 && left > right && right < n {
					let mut s = s.to_owned();
					s.push(')');
					Self::back_trace(s, n, left, right + 1, result)
			}
	}

	pub fn generate_parenthesis(n: i32) -> Vec<String> {
			let mut result = vec![];
			Self::back_trace(String::new(), n as usize, 0, 0, &mut result);
			result
	}
}