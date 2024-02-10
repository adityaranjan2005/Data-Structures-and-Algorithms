class Solution:
    # @param A : string
    # @return an integer
    def is_palindrome(self, word):
        return word == word[::-1]

    def solve(self, A):
        words = A.split()
        palindromic_count = 0

        for word in words:
            if self.is_palindrome(word):
                palindromic_count += 1

        return palindromic_count
