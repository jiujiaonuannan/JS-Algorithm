/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  if (!head) return null;
  let prev = dummy_node;

  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let current = prev.next;

  for (let i = 0; i < right - left; i++) {
    const next = current.next;
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy_node.next;
};
