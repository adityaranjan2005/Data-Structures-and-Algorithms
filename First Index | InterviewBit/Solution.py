class Solution:
    # @param arr : list of integers
    # @param queries : list of integers
    # @return a list of integers
    def solve(self, arr, queries):
        result = []
        for query in queries:
            index = self.find_index(arr, query)
            result.append(index)
        return result

    def find_index(self, array, target):
        for i in range(len(array)):
            if array[i] >= target:
                return i
        return -1
