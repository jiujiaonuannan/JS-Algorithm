## LC 回文链表

请判断一个链表是否为回文链表。

输入: 1->2->2->1
输出: true

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var headArr = []
  while(head) {
    headArr.push(head);
    head = head.next;
  }

  for(var i = 0, j = headArr.length - 1; i < headArr.length; i++, j--) {
    if (headArr[i].val !== headArr[j].val) {
        return false
    }
  }

  return true;

};

```