class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
           HashSet<Integer> bannedSet = new HashSet<>();
        for (int num : banned) {
            bannedSet.add(num);
        }

        int sum = 0;
        int count = 0;

        // Try to select integers from 1 to n
        for (int i = 1; i <= n; i++) {
            // Check if i is not banned and if adding i doesn't exceed maxSum
            if (!bannedSet.contains(i) && sum + i <= maxSum) {
                sum += i;  // Add i to the sum
                count++;    // Increment the count of chosen integers
            }
        }

        return count; 
    }
}