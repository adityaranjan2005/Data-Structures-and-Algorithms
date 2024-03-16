module.exports = { 
 //param A : array of array of integers
 //return an integer
	uniquePathsWithObstacles : function(A){

	}
};module.exports = { 
    uniquePathsWithObstacles: function(A) {
        const m = A.length;
        const n = A[0].length;
        if (A[0][0] === 1 || A[m-1][n-1] === 1) {
            return 0;
        }
        const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
        
        dp[0][0] = 1;
        for (let i = 1; i < m; i++) {
            if (A[i][0] === 1) {
                break; 
            }
            dp[i][0] = 1;
        }
        
        for (let j = 1; j < n; j++) {
            if (A[0][j] === 1) {
                break;
            }
            dp[0][j] = 1;
        }
        
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (A[i][j] === 0) { 
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]; 
                }
            }
        }
        
        return dp[m-1][n-1];
    }
};

