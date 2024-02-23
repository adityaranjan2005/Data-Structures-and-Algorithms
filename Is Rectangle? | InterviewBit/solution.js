module.exports = { 
    solve: function(A, B, C, D){
        if ((A === B && C === D) || (A === C && B === D) || (A === D && B === C)) {
            return 1; 
        } else {
            return 0; 
        }
    }
};
