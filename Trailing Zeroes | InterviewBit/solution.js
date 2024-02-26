module.exports = { 
    //param A : integer
    //return an integer
    solve : function(A){
        let count = 0;
        while (A > 0 && (A & 1) === 0) {
            A >>= 1; 
            count++;
        }
        return count;
    }
};
