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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const sortArr = [];
  buildArr(root, sortArr);
  return buildTree(sortArr);
};

const buildArr = (root, arr) => {
  if (!root) return;
  buildArr(root.left, arr);
  arr.push(root.val);
  buildArr(root.right, arr);
};

const buildTree = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null;
  const mid = Math.floor((right - left) / 2) + left;
  const node = new TreeNode(nums[mid]);
  node.left = buildTree(nums, left, mid - 1);
  node.right = buildTree(nums, mid + 1, right);
  return node;
};
