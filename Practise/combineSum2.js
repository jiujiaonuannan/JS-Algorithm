var combinationSum2 = function(candidates, target) {
	let _candidates = candidates.sort((a, b) => a - b)

	let res = []
	function dfs(index, sum, path) {
		if (sum > target) return 
		if (sum === target) return res.push(path.slice())
		for (let i = index; i < _candidates.length; i++){
			if (i - 1 >= index && _candidates[i] === _candidates[i - 1]) {
				continue
			}

			path.push(_candidates[i])
			let _sum = _candidates[i] + sum
			dfs(i+1, _sum, path)
			_sum = _sum - _candidates[i]
			path.pop()
		}
	}

	dfs(0, 0, [])

	return res
}