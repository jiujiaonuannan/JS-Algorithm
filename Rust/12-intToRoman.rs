impl Solution {
	pub fn int_to_roman(num: i32) -> String {
		 let mut answer = String::new();
		 let mut num = num;
		 let values = vec![1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		 let romans = vec!["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

		 for i in 0..13 {
				 while num >= values[i] {
						 num = num - values[i];
						 answer += romans[i];
				 } 
		 }

		 answer
	}
}