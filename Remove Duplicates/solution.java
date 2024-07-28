class Solution {
    String removeDups(String str) {
        // code here
        boolean [] set = new boolean[26];
        StringBuilder ans = new StringBuilder();
        for(int i=0;i<str.length();i++){
            if(!set[str.charAt(i)-'a']){
                ans.append(str.charAt(i));
                set[str.charAt(i)-'a']=true;
            }
        }
        return ans.toString();
    }
}
