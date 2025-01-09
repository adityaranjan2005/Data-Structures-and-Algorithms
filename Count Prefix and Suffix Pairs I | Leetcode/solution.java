public class Solution {
    public int countPrefixSuffixPairs(String[] words) {
        int count = 0;
        int n = words.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int n1 = words[i].length(), n2 = words[j].length();
                if (n1 <= n2) {
                    if (words[j].substring(0, n1).equals(words[i]) &&
                        words[j].substring(n2 - n1).equals(words[i])) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
