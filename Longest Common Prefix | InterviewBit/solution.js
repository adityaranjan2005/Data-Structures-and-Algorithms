module.exports = {
  longestCommonPrefix: function (A) {
    if (A.length === 0) {
      return "";
    }
    A.sort();
    const firstStr = A[0];
    const lastStr = A[A.length - 1];

    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
      if (firstStr.charAt(i) === lastStr.charAt(i)) {
        commonPrefix += firstStr.charAt(i); 
      } else {
        break; 
      }
    }
    return commonPrefix;
  },
};
