class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        if A == 0:
            return 0

        if A < 0:
            return -1

        start = 1
        end = A
        result = 0

        while start <= end:
            mid = (start + end) // 2
            square = mid * mid

            if square == A:
                return mid
            elif square < A:
                start = mid + 1
                result = mid
            else:
                end = mid - 1

        return result
