## LC 删除链表的倒数第N个节点
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var node = head;
    var length = getLinkedListLength(node)

    var count = length - n -1;
    if (count === -1) {
        return head.next
    }

    for(var i = 0; i < count; i++) {
        node = node.next
    }

    node.next = node.next.next;
    return head
};

var getLinkedListLength = function (head) {
    var length = 0

    while(head !== null) {
        head = head.next;
        length += 1
    }

    return length
}

```