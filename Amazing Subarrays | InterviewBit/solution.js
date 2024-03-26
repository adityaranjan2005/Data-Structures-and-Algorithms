module.exports = { 
    //param A : string
    //return an integer
    solve: function(A){
        const vowels = "aeiouAEIOU";
        let count = 0;
        const mod = 10003;
        
        for (let i = 0; i < A.length; i++) {
            if (vowels.includes(A[i])) {
                // Count all substrings starting from this vowel
                count = (count + A.length - i) % mod;
            }
        }
        
        return count;
    }
};
