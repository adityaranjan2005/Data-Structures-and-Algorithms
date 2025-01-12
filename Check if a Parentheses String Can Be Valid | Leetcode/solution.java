class Solution {
    public boolean canBeValid(String s, String locked) {
        if (s.length() % 2 != 0) 
            return false;

        int openCount = 0, closeCount = 0;
        for (int i = 0; i < s.length(); i++) {
            if (locked.charAt(i) == '0' || s.charAt(i) == '(') 
                openCount++;
            else 
                openCount--;
            if (openCount < 0) 
                return false;
        }

        openCount = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (locked.charAt(i) == '0' || s.charAt(i) == ')') 
                closeCount++;
            else 
                closeCount--;
            if (closeCount < 0) 
                return false;
        }

        return true;
    }
}
