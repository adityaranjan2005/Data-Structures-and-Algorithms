class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        stack = []

        for char in A:
            if char == '(':
                stack.append(char)
            elif char == ')':
                if not stack:
                    return 0  # Unbalanced parentheses
                stack.pop()

        # If the stack is empty, all parentheses are balanced
        return 1 if not stack else 0
