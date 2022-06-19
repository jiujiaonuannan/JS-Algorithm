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
var levelOrderBottom = function (root) {
  const output = [];
  if (root) {
    const queue = [root];

    while (queue.length) {
      const len = queue.length;
      let temp = [];
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        temp.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      output.unshift(temp);
    }
  }

  return output;
};
