class Solution:
    # @param A : list of integers
    # @param B : list of integers
    def merge(self, A, B):
        # Initialize indices for array A and B
        i = len(A) - 1
        j = len(B) - 1
        
        # Calculate the index for the merged array
        merged_index = len(A) + len(B) - 1
        
        # Ensure that A has enough space to accommodate both A and B
        A += [0] * len(B)
        
        # Merge arrays A and B in descending order
        while i >= 0 and j >= 0:
            if A[i] > B[j]:
                A[merged_index] = A[i]
                i -= 1
            else:
                A[merged_index] = B[j]
                j -= 1
            merged_index -= 1
        
        # If elements are remaining in B, copy them to A
        while j >= 0:
            A[merged_index] = B[j]
            j -= 1
            merged_index -= 1
