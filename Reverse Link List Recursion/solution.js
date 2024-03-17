// Definition for singly-linked list.
// function Node(data){
//   this.data = data;
//   this.next = null;
// }

module.exports = {
  // param A : head node of linked list
  // return the head node in the linked list
  reverseList: function (A) {
    if (A === null || A.next === null) {
      return A;
    }

    let reversedHead = this.reverseList(A.next);

    A.next.next = A;

    A.next = null;

    return reversedHead;
  },
};
