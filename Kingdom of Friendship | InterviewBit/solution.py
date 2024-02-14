class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        n = len(A)
        gifts = 0

        for i in range(n):
            if A[i] != i + 1 and A[A[i] - 1] == i + 1:
                gifts += 1

        return gifts // 2
