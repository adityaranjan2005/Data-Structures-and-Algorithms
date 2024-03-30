class Solution:
    # @param A : integer
    # @param B : integer
    # @param C : integer
    # @param D : integer
    # @param E : integer
    # @return an integer
    def solve(self, A, B, C, D, E):
        min_cost = float('inf')  
        for packets_from_first_store in range(A // B + 1):
            remaining_candies = A - packets_from_first_store * B
            packets_from_second_store = remaining_candies // D
            
            if packets_from_first_store * B + packets_from_second_store * D == A:
                total_cost = packets_from_first_store * C + packets_from_second_store * E
                
                min_cost = min(min_cost, total_cost)
        
        if min_cost == float('inf'):
            return -1
        else:
            return min_cost
