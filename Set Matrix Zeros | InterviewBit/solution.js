module.exports = {
    /**
     * param A: list of list of integers
     * @return the same list modified
     */
    solve: function (A) {
        const rows = A.length;
        const cols = A[0].length;
        
        let rowZeros = new Array(rows).fill(false);
        let colZeros = new Array(cols).fill(false);
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (A[i][j] === 0) {
                    rowZeros[i] = true;
                    colZeros[j] = true;
                }
            }
        }
    
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (rowZeros[i] || colZeros[j]) {
                    A[i][j] = 0;
                }
            }
        }
        
        return A;
    },
};
