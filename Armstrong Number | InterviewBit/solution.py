class Solution:
    # @param A : integer
    # @return an integer
    def solve(self, A):
        
        def count_digits(num):
            count = 0
            while num > 0:
                num //= 10
                count += 1
            return count

        def is_armstrong(num):
            n = count_digits(num)
            temp = num
            total = 0

            while temp > 0:
                digit = temp % 10
                total += digit ** n
                temp //= 10

            return total == num
            
        return 1 if is_armstrong(A) else 0
