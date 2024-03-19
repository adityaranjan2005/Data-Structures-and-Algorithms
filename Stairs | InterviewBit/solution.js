class Solution:
    # @param A : integer
    # @return an integer
    def climbStairs(self, A):
        if A == 1:
            return 1
        elif A == 2:
            return 2
        step1, step2 = 1, 2
        for i in range(3, A + 1):
            current = step1 + step2
            step1, step2 = step2, current

        return step2

