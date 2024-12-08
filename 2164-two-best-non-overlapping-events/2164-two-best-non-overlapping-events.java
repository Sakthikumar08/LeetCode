class Solution {
    public int maxTwoEvents(int[][] events) {
         // Step 1: Sort events by endTime
        Arrays.sort(events, (a, b) -> Integer.compare(a[1], b[1]));

        int n = events.length;
        int maxSum = 0;

        // Step 2: Array to store max value up to each event
        int[] maxValueUpTo = new int[n];
        maxValueUpTo[0] = events[0][2];
        for (int i = 1; i < n; i++) {
            maxValueUpTo[i] = Math.max(maxValueUpTo[i - 1], events[i][2]);
        }

        // Step 3: Iterate over each event and find the best pair
        for (int i = 0; i < n; i++) {
            int startTime = events[i][0];
            int value = events[i][2];

            // Binary search to find the latest non-overlapping event
            int low = 0, high = i - 1, bestIndex = -1;
            while (low <= high) {
                int mid = low + (high - low) / 2;
                if (events[mid][1] < startTime) {
                    bestIndex = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }

            // Compute max sum
            int currentSum = value;
            if (bestIndex != -1) {
                currentSum += maxValueUpTo[bestIndex];
            }
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}