class Solution:
    # @param A : string
    # @return a list of integers
    def solve(self, A):
        frequency = [0] * 26
        for char in A:
            frequency[ord(char) - ord('a')] += 1
        return frequency
