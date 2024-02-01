class Solution:
    # @param A: list of integers
    # @return an integer
    def solve(self, A):
        n = len(A)
        count = 0
        max_value = A[0]

        for i in range(1, n):
            if A[i] > max_value:
                count += 1
                max_value = A[i]

        return count + 1
