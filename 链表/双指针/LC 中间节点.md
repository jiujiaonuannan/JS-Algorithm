## 中间节点

链表的中间节点

```
findMiddleNode() {
  let fast = this.head
  let slow = this.head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

```