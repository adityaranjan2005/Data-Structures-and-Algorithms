module.exports = { 
    allFactors : function(A){
        let factors = [];
        let sqrtA = Math.sqrt(A);
        
        for (let i = 1; i <= sqrtA; i++) {
            if (A % i === 0) {
                factors.push(i);
                if (i !== A / i) {
                    factors.push(A / i);
                }
            }
        }       
        factors.sort((a, b) => a - b); // Sort the factors in ascending order
        return factors;
    }
};
