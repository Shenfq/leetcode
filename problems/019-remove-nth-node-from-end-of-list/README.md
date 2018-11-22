# 删除链表的倒数第N个节点

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：
给定的 n 保证是有效的。


## 解法

做这个题目需要使用到链表中常用的两个概念：dummy head、快慢指针。

#### Dummy Head

在对单链表进行遍历时，经常会设置一个虚拟的头结点，这个节点对于整个链表没有任何的实际意义，但是在编程过程中可以防止一些边界条件产生bug。

本题中如果不用dummy head而直接返回head的话，就会存在要考虑head是否为空的问题，在while循环中会出现问题。有了dummy head, 所有的节点都拥有了前置节点，也就不用再考虑头结点为空的情况了，这一点在删除节点是非常有用。返回时返回dummy.next,所以也不用存储头结点。

为了便于理解，我一下下面的例子：

```javascript
let head = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 0,
      next: null
    }
  }
}
let curr = head
let prev = null
// 下面删除val为0的节点
while(curr) {
  // 判断该节点是否要被删除
  if (curr.val === 0) {
    if (!prev) { // 没有前置节点，表示是头结点
      head = curr.next
    }
    else {
      prev.next = curr.next
    }
  }
  else {
    prev = curr
  }
  curr = curr.next
}
```

这里我们需要区分当前节点是否为头结点，因为头结点没有前置节点。此时，加上dummy head再来看看。

```javascript
let dummy = {
  val: 0,
  next: head
}
let curr = dummy.next
let prev = dummy
// 下面删除val为0的节点
while(curr) {
  // 判断该节点是否要被删除
  if (curr.val === 0) {
    prev.next = curr.next
  }
  else {
    prev = curr
  }
  curr = curr.next
}
```

#### 快慢指针

在遍历链表时，创建两个指针，这样减少遍历的次数。

原本我们需要遍历两次才能找到倒数第n个节点，第一次遍历获取链表长度，第二次找到第n个几点。

```javascript
var removeNthFromEnd = module.exports = function(head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let curr = dummy.next
  let idx = 0
  while (curr.next) {
    curr = curr.next
    idx++
  }
  let delIdx = idx - n
  curr = dummy.next // 重置指针
  let i = 0
  while (i < delIdx) {
    curr = curr.next
    i++
  }
  curr.next = curr.next.next
}
```

使用双指针（快指针和慢指针），先将快指针移动n个位置，然后再移动慢指针，此时快慢指针的距离就是n，然后同时向前移动快指针和慢指针，直到快指针移动到末尾，此时慢指针所在的位置就是要被删除的元素。

**AC代码**

```javascript
var removeNthFromEnd = module.exports = function(head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  // 创建快慢指针
  let fast = dummy
  let slow = dummy

  // 先将快指针向前移动n个节点
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  // 同时移动快慢指针，直到快指针到达末尾
  // 此时慢指针与快指针保持的距离为n
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
```
