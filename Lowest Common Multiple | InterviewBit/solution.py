class Solution:
    # @param A : integer
    # @param B : integer
    # @return a long
    def solve(self, A, B):
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        def lcm(a, b):
            return (a * b) // gcd(a, b)

        if A <= 0 or B <= 0:
            return "Invalid input. Please provide positive integers."
        result = lcm(A, B)
        return result
