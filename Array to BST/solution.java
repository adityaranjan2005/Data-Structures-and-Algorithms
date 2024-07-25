class Solution {
    Node bstTree(int nums[], int left, int right){
        if(left>right){
            return null;
        }
        int mid=left+(right-left)/2;
        Node root=new Node(nums[mid]);
        root.left=bstTree(nums, left, mid-1);
        root.right=bstTree(nums, mid+1,right);
        return root;
    }
    public Node sortedArrayToBST(int[] nums) {
        // Code here
        Node root=bstTree(nums, 0, nums.length-1);
        return root;
    }
}
