class Solution:
    # @param A : root node of tree
    # @return the root node in the tree
    def invertTree(self, A):
        if A is None:
            return None

        A.left, A.right = self.invertTree(A.right), self.invertTree(A.left)

        return A
