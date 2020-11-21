## LC 旋转链表

给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例1: 
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL


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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) return null
    
    var fast = slow = head;

    var length = 1

    // 计算长度
    while(fast.next) {
      fast = fast.next;
      length++;
    }

    // 连接闭环
    fast.next = head;

    // 分割
    for(var i = 0; i < length - k % length - 1; i++) {
      slow = slow.next;
    }

    var new_head = slow.next;
    slow.next = null;
    
    return new_head
};

```