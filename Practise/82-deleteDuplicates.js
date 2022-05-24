/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;

  let node = new ListNode(0, head);

  let current = node;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const nextVal = current.next.val;
      while (current.next.val === nextVal) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return node.next;
};
