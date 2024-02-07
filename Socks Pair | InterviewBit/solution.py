class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        color_count = {}

        for color in A:
            if color in color_count:
                color_count[color] += 1
            else:
                color_count[color] = 1
        num_pairs = 0
        for count in color_count.values():
            num_pairs += count // 2

        return num_pairs
