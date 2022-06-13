/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const res = [];
  const [m, n] = [mat.length, mat[0].length];
  const k = m + n - 1;

  let flag = false;
  for (let i = 0; i < k; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (!mat[i - j] || mat[i - j][j] === undefined) continue;

      if (!flag) {
        temp.push(mat[i - j][j]);
      } else {
        temp.unshift(mat[i - j][j]);
      }
    }

    res.push(...temp);
    flag = !flag;
  }

  return res;
};
