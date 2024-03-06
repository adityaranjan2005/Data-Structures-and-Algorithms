class Solution:
    # @param A : tuple of integers
    # @return an integer
    def majorityElement(self, A):
        count = 0
        candidate = None
        
        for num in A:
            if count == 0:
                candidate = num
                count = 1
            elif candidate == num:
                count += 1
            else:
                count -= 1
        
        return candidate
