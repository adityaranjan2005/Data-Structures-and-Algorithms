class Solution:
    # @param A : tuple of integers
    # @param B : tuple of integers
    # @return an integer
    def canCompleteCircuit(self, A, B):
        n = len(A)
        
        total_gas = 0
        current_gas = 0
        start_index = 0
        
        for i in range(n):
            total_gas += A[i] - B[i]
            current_gas += A[i] - B[i]
            
            if current_gas < 0:
                current_gas = 0
                start_index = i + 1
                
        if total_gas < 0:
            return -1
        else:
            return start_index

