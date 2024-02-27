module.exports = { 
    //param A: array of strings
    //return an integer
    solve: function(A){
        let uniqueLetters = new Set();
        A.forEach(word => {
            word.split('').forEach(char => {
                uniqueLetters.add(char.toLowerCase());
            });
        });
        return uniqueLetters.size === 26 ? 1 : 0;
    }
};
