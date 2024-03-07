module.exports = { 
    sieve: function(A) {
        if (A < 2) {
            return [];
        }

        let primes = new Array(A + 1).fill(true);
        primes[0] = primes[1] = false;

        for (let i = 2; i * i <= A; i++) {
            if (primes[i]) {
                for (let j = i * i; j <= A; j += i) {
                    primes[j] = false;
                }
            }
        }

        return primes.reduce((result, isPrime, index) => {
            if (isPrime) {
                result.push(index);
            }
            return result;
        }, []);
    }
};
