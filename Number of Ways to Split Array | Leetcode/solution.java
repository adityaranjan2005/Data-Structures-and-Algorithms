class Solution {

    public int waysToSplitArray(int[] nums) {
        int n = nums.length;

        long[] prefSum = new long[n];
        prefSum[0] = nums[0];

        for (int i = 1; i < n; i++) {
            prefSum[i] = prefSum[i - 1] + nums[i];
        }

        int count = 0;

        for (int i = 0; i < n - 1; i++) {

            long leftSum = prefSum[i];

            long rightSum = prefSum[n - 1] - prefSum[i];

            if (leftSum >= rightSum) {
                count++;
            }
        }

        return count;
    }
}
