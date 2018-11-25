class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
  print() {
    let point = this
    let idx = 0
    while (point) {
      console.log(idx, point.val)
      point = point.next
      idx++
    }
  }
}

ListNode.generate = list => {
  const dummy = new ListNode(0)
  list.reduce((node, val) => {
    node.next = new ListNode(val)
    return node.next
  }, dummy)
  return dummy.next
}
module.exports = ListNode
