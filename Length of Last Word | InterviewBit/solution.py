class Solution:
    def lengthOfLastWord(self, A):
        current_length = 0
        in_word = False
        for char in reversed(A):
            if char == ' ':
                if in_word:
                    break
            else:
                current_length += 1
                in_word = True

        return current_length
