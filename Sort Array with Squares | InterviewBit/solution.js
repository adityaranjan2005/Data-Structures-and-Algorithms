module.exports = { 
    //param A : array of integers
    //return a array of integers
    solve : function(A){
        const n = A.length;
        const result = new Array(n);
        let left = 0, right = n - 1, index = n - 1;
        
        while (left <= right) {
            const leftSquare = A[left] * A[left];
            const rightSquare = A[right] * A[right];
            
            if (leftSquare > rightSquare) {
                result[index--] = leftSquare;
                left++;
            } else {
                result[index--] = rightSquare;
                right--;
            }
        }
        
        return result;
    }
};
