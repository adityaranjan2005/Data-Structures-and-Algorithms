class Solution:
    # @param A : string
    # @return an integer
    def isPalindrome(self, A):
        def isAlphanumeric(char):
            return char.isalnum()
        clean_s = ''.join(filter(isAlphanumeric, A.lower()))
        return int(clean_s == clean_s[::-1])
