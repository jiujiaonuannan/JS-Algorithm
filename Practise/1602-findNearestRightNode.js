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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function (root, u) {
  const stack = [root];
  while (stack.length) {
    let len = stack.length;
    while (len--) {
      let arr = stack.pop();
      if (arr.val == u.val) {
        if (len) return stack.pop();
        else return null;
      }

      arr.left && stack.unshift(arr.left);
      arr.right && stack.unshift(arr.right);
    }
  }
};
