class Solution:
    # @param A : list of integers
    # @return a list of integers
    def solve(self, A):
        n = len(A)
        if n == 0:
            return []

        leaders = [A[-1]]
        max_right = A[-1]

        for i in range(n - 2, -1, -1):
            if A[i] > max_right:
                leaders.append(A[i])
                max_right = A[i]

        leaders.reverse()
        return leaders
