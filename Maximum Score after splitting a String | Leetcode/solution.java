class Solution {
    public int maxScore(String s) {
        int ans = 0;
        int n = s.length();
        int zero = 0;

        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == '0') {
                zero++;
            }
            int one = 0;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(j) == '1') {
                    one++;
                }
            }
            ans = Math.max(ans, one + zero);
        }
        return ans;
    }
}
