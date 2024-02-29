module.exports = { 
    //param A : integer
    //return an integer
    solve : function(A){
        let height = 0;
        let blocksUsed = 0;
        
        while (blocksUsed <= A) {
            height++;
            blocksUsed += height;
        }
    
        if (blocksUsed > A) {
            height--;
        }
        
        return height;
    }
};
