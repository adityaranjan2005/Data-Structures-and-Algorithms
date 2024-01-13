import math

class Solution:
    # @param A : integer
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        items_per_week = A * 5
        total_weeks, remaining_days = divmod(B, items_per_week)
        if remaining_days > 0:
            total_weeks += 1

        return total_weeks
