module.exports = { 
    prevSmaller: function(A) {
        const n = A.length;
        const result = new Array(n).fill(-1); 
        const stack = []; 
        
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                result[i] = A[stack[stack.length - 1]];
            }
            stack.push(i);
        }
        
        return result;
    }
};
