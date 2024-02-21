module.exports = {
    wave: function (A) {
        A.sort(function (a, b) {
            return a - b;
        });
        for (let i = 0; i < A.length - 1; i += 2) {
            let temp = A[i];
            A[i] = A[i + 1];
            A[i + 1] = temp;
        }

        return A;
    }
};
