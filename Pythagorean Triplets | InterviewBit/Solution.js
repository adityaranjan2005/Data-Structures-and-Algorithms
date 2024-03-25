module.exports = {
    //param A : integer
    //return an integer
    solve: function(A) {
        let count = 0;
        
        for (let a = 1; a <= A; a++) {
            for (let b = a + 1; b <= A; b++) {
                let c = Math.sqrt(a * a + b * b);
                if (c <= A && Math.floor(c) === c) {
                    count++;
                }
            }
        }
        return count;
    }
};
