class Solution{
    static int countMin(String str)
    {
       int[][] dp = new int[str.length()][str.length()];
       for(int [] arr : dp)
        Arrays.fill(arr , -1);
    
       String rev = new StringBuilder(str).reverse().toString();
       return str.length() - solve(0,0,str,rev,dp);
    }
    public static int solve(int i , int j , String str , String rev , int[][] dp){
        if(i == str.length() || j == rev.length())
            return 0;
        if(dp[i][j] != -1)
            return dp[i][j];
        
        if(str.charAt(i) == rev.charAt(j))
            dp[i][j] =  1 + solve(i+1 , j+1 , str , rev , dp);
        
        else
        
        dp[i][j] =  Math.max(solve(i+1 , j , str , rev , dp) ,
        solve(i , j+1 , str , rev , dp));
        
        return dp[i][j];
        
    }
}
