/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let output = [];

  intervals.push(newInterval);

  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (prev[1] >= cur[0]) {
      const max = Math.max(prev[1], cur[1]);
      prev[1] = max;
    } else {
      output.push(prev);
      prev = cur;
    }
  }

  output.push(prev);

  return output;
};
