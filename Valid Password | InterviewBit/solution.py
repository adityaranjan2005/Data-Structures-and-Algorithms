class Solution:
    # @param A : list of characters
    # @return an integer
    def solve(self, A):
        has_digit = False
        has_lower = False
        has_upper = False
        has_special = False

        for char in A:
            if char.isdigit():
                has_digit = True
            elif char.islower():
                has_lower = True
            elif char.isupper():
                has_upper = True
            elif char in ['@', '#', '%', '&', '!', '$', '*']:
                has_special = True

        if has_digit and has_lower and has_upper and has_special and 8 <= len(A) <= 15:
            return 1
        else:
            return 0
