class Solution:
    # @param A : integer
    # @param B : integer
    # @return an long
    def solve(self, A, B):
        count = 1
        while B > 1:
            if A % 2 == 0:
                A = A // 2
            else:
                A = 3 * A + 1
            B -= 1
            count += 1
        return A
