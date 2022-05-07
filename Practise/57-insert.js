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

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  let i = 0;
  let n = intervals.length;
  let newStart = newInterval[0];
  let newEnd = newInterval[1];
  while (i < n && newStart > intervals[i][1]) {
    res.push(intervals[i]);
    i++;
  }
  while (i < n && newEnd >= intervals[i][0]) {
    newStart = Math.min(newStart, intervals[i][0]);
    newEnd = Math.max(newEnd, intervals[i][1]);
    i++;
  }
  res.push([newStart, newEnd]);
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};

insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
);
