/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = [];
  const dfs = (node, arr, total) => {
    total += node?.val;
    arr.push(node.val);

    if (node.left || node.right) {
      node.left && dfs(node.left, arr.slice(), total);
      node.right && dfs(node.right, arr.slice(), total);
    } else if (total === targetSum) {
      return res.push(arr);
    }
  };

  dfs(root, [], 0);

  return res;
};
