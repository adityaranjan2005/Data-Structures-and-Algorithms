module.exports = { 
    //param A : array of integers
    //return an integer
    lis : function(A){
        const n = A.length;
        if (n === 0) return 0;

        const dp = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (A[i] > A[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        let maxLen = 1;
        for (let i = 0; i < n; i++) {
            maxLen = Math.max(maxLen, dp[i]);
        }

        return maxLen;
    }
};
