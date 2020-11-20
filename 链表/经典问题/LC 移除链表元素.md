
## LC 移除链表元素

删除链表中等于给定值 val 的所有节点

示例: 

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5


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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var sentinel = new ListNode(0)
  sentinel.next = head
  var prev = sentinel

  while(prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }

  return sentinel.next;
};

```