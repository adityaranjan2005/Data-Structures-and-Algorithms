module.exports = { 
    maxProfit: function(A) {
        let profit = 0;
        
        for (let i = 1; i < A.length; i++) {
            if (A[i] > A[i - 1]) {
                profit += A[i] - A[i - 1];
            }
        }
        
        return profit;
    }
};
