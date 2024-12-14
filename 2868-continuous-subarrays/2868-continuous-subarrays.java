class Solution {
    public long continuousSubarrays(int[] nums) {
        long count = 0;
        int n = nums.length;
        int left = 0;

        // Deque to track max and min values in the current window
        Deque<Integer> maxDeque = new ArrayDeque<>();
        Deque<Integer> minDeque = new ArrayDeque<>();

        for (int right = 0; right < n; right++) {
            // Maintain maxDeque
            while (!maxDeque.isEmpty() && nums[maxDeque.peekLast()] <= nums[right]) {
                maxDeque.pollLast();
            }
            maxDeque.addLast(right);

            // Maintain minDeque
            while (!minDeque.isEmpty() && nums[minDeque.peekLast()] >= nums[right]) {
                minDeque.pollLast();
            }
            minDeque.addLast(right);

            // Ensure the subarray condition is satisfied
            while (nums[maxDeque.peekFirst()] - nums[minDeque.peekFirst()] > 2) {
                left++;
                if (maxDeque.peekFirst() < left) {
                    maxDeque.pollFirst();
                }
                if (minDeque.peekFirst() < left) {
                    minDeque.pollFirst();
                }
            }

            // Add the number of valid subarrays ending at right
            count += (right - left + 1);
        }

        return count;
    }
}
