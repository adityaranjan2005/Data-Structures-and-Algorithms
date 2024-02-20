module.exports = {
    //param A : integer
    //param B : integer
    //return an integer
    solve: function (A, B) {
        const MODULO = 10000000;
        return (A + B) % MODULO;
    }
};
