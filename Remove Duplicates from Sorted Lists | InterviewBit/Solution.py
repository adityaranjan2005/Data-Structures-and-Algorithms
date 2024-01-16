class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteDuplicates(self, A):
        if not A or not A.next:
            return A

        current = A

        while current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next

        return A
