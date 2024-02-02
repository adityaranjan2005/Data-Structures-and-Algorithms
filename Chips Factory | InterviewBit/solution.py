class Solution:
    # @param A : list of integers
    # @return a list of integers
    def solve(self, A):
        num_zeros = A.count(0)
        A = [num for num in A if num != 0]
        A += [0] * num_zeros

        return A
