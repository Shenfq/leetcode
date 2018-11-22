class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  print () {
    let point = this
    let idx = 0
    while(point) {
      console.log(idx, point.val)
      point = point.next
      idx++
    }
  }
}

module.exports = ListNode;
