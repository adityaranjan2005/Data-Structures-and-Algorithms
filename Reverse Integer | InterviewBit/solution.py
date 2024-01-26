class Solution:
    # @param A : integer
    # @return an integer
    def reverse(self, A):
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31

        sign = 1
        if A < 0:
            sign = -1
            A = abs(A)

        reversed_num = 0
        while A > 0:
            digit = A % 10
            if reversed_num > (INT_MAX - digit) // 10:
                return 0
            reversed_num = reversed_num * 10 + digit
            A //= 10

        return sign * reversed_num
