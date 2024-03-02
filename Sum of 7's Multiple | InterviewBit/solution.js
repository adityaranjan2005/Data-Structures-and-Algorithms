module.exports = { 
    //param A : integer
    //param B : integer
    //return a long integers
    solve : function(A, B){
        let sum = 0;
        let start = Math.ceil(A / 7) * 7;
        for (let i = start; i <= B; i += 7) {
            sum += i;
        }
        return sum;
    }
};
