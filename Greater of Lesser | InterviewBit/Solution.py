class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @param C : integer
    # @return an integer
    def solve(self, A, B, C):
        count_greater_than_c_in_A = 0
        count_less_than_c_in_B = 0
        for num in A:
            if num > C:
                count_greater_than_c_in_A += 1
        for num in B:
            if num < C:
                count_less_than_c_in_B += 1

        return max(count_greater_than_c_in_A, count_less_than_c_in_B)
