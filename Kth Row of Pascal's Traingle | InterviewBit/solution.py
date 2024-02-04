class Solution:
    def getRow(self, rowIndex):
        if rowIndex < 0:
            return []

        result = [1]

        for i in range(1, rowIndex + 1):
            new_element = result[-1] * (rowIndex - i + 1) // i
            result.append(new_element)

        return result
