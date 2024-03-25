module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return an integer
    coverPoints : function(A, B){
        if (A.length !== B.length || A.length === 0) return 0;
        
        let steps = 0;
        for (let i = 1; i < A.length; i++) {
            let x1 = A[i - 1];
            let y1 = B[i - 1];
            let x2 = A[i];
            let y2 = B[i];
            steps += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
        }
        
        return steps;
    }
};
