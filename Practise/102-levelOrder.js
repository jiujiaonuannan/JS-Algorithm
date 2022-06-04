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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const insertNode = (root, level, queue) => {
    if (!root) return;
    queue[level] ? queue[level].push(root.val) : (queue[level] = [root.val]);
    insertNode(root.left, level + 1, queue);
    insertNode(root.right, level + 1, queue);
  };

  const queue = [];
  insertNode(root, 0, queue);

  return queue;
};
