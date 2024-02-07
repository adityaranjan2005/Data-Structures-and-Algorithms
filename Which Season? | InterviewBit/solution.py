class Solution:
    # @param A : integer
    # @return a string
    def solve(self, A):
        if 1 <= A <= 12:
            if 3 <= A <= 5:
                return "Spring"
            elif 6 <= A <= 8:
                return "Summer"
            elif 9 <= A <= 11:
                return "Autumn"
            else:
                return "Winter"
        else:
            return "Invalid"
