module.exports = { 
  solve: function(A) {
    let minElement = Infinity;
    let maxElement = -Infinity;


    for (let i = 0; i < A.length; i++) {
      if (A[i] < minElement) {
        minElement = A[i];
      }
      if (A[i] > maxElement) {
        maxElement = A[i];
      }
    }

    return minElement + maxElement;
  }
};
