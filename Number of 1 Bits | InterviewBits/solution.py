class Solution:
    def numSetBits(self, A):
        return bin(A).count('1')
