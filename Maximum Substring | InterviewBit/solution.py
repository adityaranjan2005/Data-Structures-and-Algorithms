class Solution:
    # @param A : string
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        max_a_count = 0
        n = len(A)

        for i in range(0, n, B):
            substring = A[i:i + B]
            a_count = substring.count('a')
            max_a_count = max(max_a_count, a_count)

        return max_a_count
