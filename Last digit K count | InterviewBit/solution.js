class Solution:
    # @param A : integer
    # @param B : integer
    # @param C : integer
    # @return an integer
    def solve(self, A, B, C):
        count = 0

        for num in range(A, B + 1):
            if num % 10 == C:
                count += 1

        return count
