/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const MOD = 1000000007;
  if (n < 2) return n;

  let p = 0,
    q = 0,
    output = 1;

  for (let i = 2; i <= n; i++) {
    p = q;
    q = output;
    output = (p + q) % MOD;
  }

  return output;
};
