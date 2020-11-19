## LC 相交链表

编写一个程序，找到两个单链表相交的起始节点。


```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *  this.val = val;
 *  this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null ) {
    return null
  }

  var PA = headA, PB = headB;
  while(PA !== PB) {
    PA = PA === null ? headB : PA.next;
    PB = PB === null ? headA : PB.next;
  }
  
  return PA
};
```