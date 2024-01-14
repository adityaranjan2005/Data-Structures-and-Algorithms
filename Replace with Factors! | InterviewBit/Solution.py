# Definition for singly-linked list.
# class ListNode:
#    def __init__(self, x):
#        self.val = x
#        self.next = None

class Solution:
    # @param A : head node of linked list
    # @param B : integer
    # @return the head node in the linked list
    def solve(self, head, B):
        current_node = head
        while current_node is not None:
            nearest_multiple = (current_node.val // B) * B
            current_node.val = nearest_multiple
            current_node = current_node.next
            
        return head
