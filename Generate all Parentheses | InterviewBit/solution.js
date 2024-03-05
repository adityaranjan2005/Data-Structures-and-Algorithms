module.exports = { 
    //param A : string
    //return an integer
    isValid : function(A){
        let stack = [];
        const openingBrackets = ['(', '{', '['];
        const closingBrackets = [')', '}', ']'];

        for (let i = 0; i < A.length; i++) {
            const currentBracket = A[i];

            if (openingBrackets.includes(currentBracket)) {
                stack.push(currentBracket);
            } else {
                if (stack.length === 0 || openingBrackets[closingBrackets.indexOf(currentBracket)] !== stack.pop()) {
                    return 0;
                }
            }
        }
        return stack.length === 0 ? 1 : 0;
    }
};
