class Solution:
    # @param A : string
    # @return a string
    def solve(self, A):
        result = ""
        
        for char in A:
            if char.isupper():
                result += char.lower()
            elif char.islower():
                result += char.upper()
            else:
                result += char
        
        return result
