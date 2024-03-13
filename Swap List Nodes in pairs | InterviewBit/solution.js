// Definition for singly-linked list.
// function Node(data){
//   this.data = data;
//   this.next = null;
// }

module.exports = {
  swapPairs: function(A) {
    if (!A || !A.next) {
      return A;
    }

    let dummy = new Node(0);
    dummy.next = A;
    let current = dummy;

    while (current.next && current.next.next) {
      let firstNode = current.next;
      let secondNode = current.next.next;

      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      current.next = secondNode;

      current = current.next.next;
    }

    return dummy.next;
  }
};
