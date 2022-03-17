/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  const n = s.length;
  const m = t.length;
  if (Math.abs(n - m) > 1) return false;

  for (let i = 0; i < Math.min(n, m); i++) {
    if (s[i] !== t[i]) {
      if (n < m) {
        return s.substring(i) === t.substring(i + 1);
      } else if (n === m) {
        return s.substring(i + 1) === t.substring(i + 1);
      } else {
        return s.substring(i + 1) === t.substring(i);
      }
    }
  }

  return s !== t;
};
