module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of integers
    twoSum: function (A, B) {
        const numIndices = {};

        for (let i = 0; i < A.length; i++) {
            const num = A[i];
            const complement = B - num;

            if (numIndices.hasOwnProperty(complement)) {
                return [numIndices[complement] + 1, i + 1]; // 1-based indexing
            }

            if (!numIndices.hasOwnProperty(num)) {
                numIndices[num] = i;
            }
        }

        return [];
    }
};
