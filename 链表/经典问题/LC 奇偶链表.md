## LC 奇偶链表

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

示例:
  输入: 2->1->3->5->6->4->7->NULL 
  输出: 2->3->6->7->1->5->4->NULL


```
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
var oddEvenList = function(head) {
  if (head === null) return head
  var evenHead = head.next
  var odd = head, even = evenHead
  while(odd.next !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead
  return head
};

```