class Solution {
    public int maximumBeauty(int[] nums, int k) {
         // Sort the array to align potential ranges
        Arrays.sort(nums);

        int n = nums.length;
        int maxBeauty = 0;
        int left = 0;

        // Sliding window to find the longest subsequence within range
        for (int right = 0; right < n; right++) {
            // Ensure the range [nums[left] - k, nums[right] + k] is valid
            while (nums[right] - nums[left] > 2 * k) {
                left++;
            }
            // Update the maximum beauty (window size)
            maxBeauty = Math.max(maxBeauty, right - left + 1);
        }

        return maxBeauty;
    }
}