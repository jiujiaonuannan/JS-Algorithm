/**
 * @param {string} s
 * @return {number}
 * 解题思路： hashMap + 滑动窗口
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;

  if (len <= 1) return len;

  let l = 0;
  let ans = 0;
  const map = new Map();

  for (let r = 0; r < len; r++) {
    if (map.has(s[r])) {
      l = Math.max(map.get(s[r]) + 1, l);
      //   continue
    }

    map.set(s[r], r);
    ans = Math.max(ans, r - l + 1);
  }

  return ans;
};

lengthOfLongestSubstring("abcabcbb");
