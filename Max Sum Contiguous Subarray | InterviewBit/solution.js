module.exports = { 
    maxSubArray: function(A){
        let maxEndingHere = A[0];
        let maxSoFar = A[0];

        for (let i = 1; i < A.length; i++) {
            maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }
};
