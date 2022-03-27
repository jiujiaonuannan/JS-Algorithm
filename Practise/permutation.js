/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let output = [];

  function dfs(path, keyPathList) {
    if (path.length === s.length) {
      const pathStr = path.join("");
      if (output.indexOf(pathStr) < 0) output.push(pathStr);
      return;
    }

    for (let i = 0; i < s.length; i++) {
      let keyPath = `${i}&${s[i]}`;
      if (keyPathList.indexOf(keyPath) > -1) continue;
      keyPathList.push(keyPath);
      path.push(s[i]);
      dfs(path, keyPathList);
      path.pop();
      keyPathList.pop();
    }
  }

  dfs([], []);

  return output;
};
