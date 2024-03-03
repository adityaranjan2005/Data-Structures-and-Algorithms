class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        def is_palindrome(s):
            return s == s[::-1]

        n = len(A)

        for i in range(n // 2):
            if A[i] != A[n - 1 - i]:
                new_str1 = A[:i] + A[i + 1:]
                new_str2 = A[:n - 1 - i] + A[n - i:]
                if is_palindrome(new_str1) or is_palindrome(new_str2):
                    return 1 
                return 0
        return 1 
