module.exports = { 
    //param A : integer
    //return an integer
    solve : function(A){
        const sumOfDigits = (num) => {
            let sum = 0;
            while (num > 0) {
                sum += num % 10;
                num = Math.floor(num / 10);
            }
            return sum;
        };
        while (A >= 10) {
            A = sumOfDigits(A);
        }

        return A;
    }
};
