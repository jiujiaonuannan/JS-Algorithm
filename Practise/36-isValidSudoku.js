/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const [row, colunm, box] = [{}, {}, {}];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j];
      if (num == ".") continue;
      const boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);

      if (
        row[`${i}-${num}`] ||
        colunm[`${j}-${num}`] ||
        box[`${boxIndex}-${num}`]
      ) {
        return false;
      }

      row[`${i}-${num}`] = true;
      colunm[`${j}-${num}`] = true;
      box[`${boxIndex}-${num}`] = true;
    }
  }
  return true;
};
