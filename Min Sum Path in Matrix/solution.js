module.exports = { 
    //param A : array of array of integers
    //return an integer
    minPathSum : function(A){
        if (A.length === 0 || A[0].length === 0) return 0;
        
        const m = A.length;
        const n = A[0].length;
        
        const dp = Array.from({ length: m }, () => Array(n).fill(0));
        
        dp[0][0] = A[0][0];
        for (let i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + A[i][0];
        }
    
        for (let j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + A[0][j];
        }
        
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + A[i][j];
            }
        }
        return dp[m - 1][n - 1];
    }
};
