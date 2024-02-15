class Solution:
    # @param A : integer
    # @return an integer
    def solve(self, A):
        binary_str = bin(A)[2:]
        flipped_str = ''.join('1' if bit == '0' else '0' for bit in binary_str)
        flipped_int = int(flipped_str, 2)
        return flipped_int
