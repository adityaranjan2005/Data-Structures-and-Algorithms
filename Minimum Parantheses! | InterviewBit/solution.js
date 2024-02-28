module.exports = { 
    solve: function(A) {
        let stack = [];
        let count = 0;

        for (let i = 0; i < A.length; i++) {
            if (A[i] === '(') {
                stack.push(A[i]);
            } else {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    count++;
                }
            }
        }

        return count + stack.length;
    }
};
