class Solution {
    public int shortestSubarray(int[] nums, int k) {
      Deque<Integer> q = new LinkedList<>();
      long[] cumSum = new long[nums.length];
      int j=0;
      int result = Integer.MAX_VALUE;
      while(j<nums.length)
      {
         if(j==0)
         cumSum[j] = nums[j];
         else
         cumSum[j] = cumSum[j-1]+nums[j];

         if(cumSum[j]>=k)
         result = Math.min(result,j+1);

         while(!q.isEmpty() && cumSum[j] - cumSum[q.peekFirst()] >= k)
         {
           result = Math.min(result,j-q.peekFirst());
           q.pollFirst();
         }
         while(!q.isEmpty() && cumSum[j]<=cumSum[q.peekLast()])
         {
            q.pollLast();
         }
         q.offerLast(j);
         j++;
      }
      return result==Integer.MAX_VALUE ? -1 : result;
    }
}
