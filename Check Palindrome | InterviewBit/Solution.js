module.exports = { 
    //param A : string
    //return an integer
    solve : function(A){
        const charFreq = new Map();
        for (let char of A) {
            if (charFreq.has(char)) {
                charFreq.set(char, charFreq.get(char) + 1);
            } else {
                charFreq.set(char, 1);
            }
        }
        
        let oddCount = 0;
        for (let count of charFreq.values()) {
            if (count % 2 !== 0) {
                oddCount++;
            }
        }
        if (oddCount > 1) {
            return 0;
        } else {
            return 1;
        }
    }
};
