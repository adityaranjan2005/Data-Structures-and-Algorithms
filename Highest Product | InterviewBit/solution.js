module.exports = { 
    //param A : array of integers
    //return an integer
    maxp3: function(A) {
        if (A.length < 3) {
            return 0;
        }
        A.sort((a, b) => a - b);
        
        const n = A.length;
        return Math.max(A[n - 1] * A[n - 2] * A[n - 3], A[0] * A[1] * A[n - 1]);
    }
};
