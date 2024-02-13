class Solution:
    # @param A : list of integers
    # @return a float
    def solve(self, A):
        mean = sum(A) / len(A)
        sum_squared_diff = sum((x - mean) ** 2 for x in A)
        variance = sum_squared_diff / len(A)
        return round(variance, 2)
