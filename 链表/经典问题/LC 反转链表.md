## LC 反转链表

反转一个单链表。

示例: 
  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL

```
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
var reverseList = function(head) {
  var prev = null;
  var cur = head;
  var temp;

  while(cur !== null) {
      temp = cur.next
      cur.next = prev
      prev = cur
      cur = temp
  }

  return prev
};

```