module.exports = { 
    solve: function(A) {
        let sum = 0;
        let currentNum = 0;

        for (let i = 0; i < A.length; i++) {
            const charCode = A.charCodeAt(i);

            if (charCode >= 48 && charCode <= 57) { 
                currentNum = currentNum * 10 + parseInt(A[i]);
            } else {
                sum += currentNum;
                currentNum = 0;
            }
        }

        sum += currentNum;

        return sum;
    }
};
