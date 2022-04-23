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
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
  if (!root) {
    return 0;
  }

  const isValid = (root, val) => {
    if (!root) {
      return true;
    }
    if (root.val === val) {
      return isValid(root.left, val) && isValid(root.right, val);
    }
    return false;
  };

  let count = 0;

  if (isValid(root, root.val)) {
    count = 1;
  }
  return (
    count + countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right)
  );
};
