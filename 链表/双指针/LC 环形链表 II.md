## 环形链表 II

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
  var visited = new Set()
  
  while(head !== null) {
      if (visited.has(head)) {
          return head
      } 

      visited.add(head)
      head = head.next
  }

  return null
};