class Solution {
    public long findScore(int[] nums) {
         long score = 0;
        int n = nums.length;
        
        // Priority queue to store elements as (value, index)
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] == b[0] ? Integer.compare(a[1], b[1]) : Integer.compare(a[0], b[0]));

        // Fill the priority queue
        for (int i = 0; i < n; i++) {
            pq.offer(new int[] {nums[i], i});
        }

        // Set to keep track of marked indices
        HashSet<Integer> marked = new HashSet<>();

        // Process the priority queue
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int value = current[0];
            int index = current[1];

            // Skip if already marked
            if (marked.contains(index)) continue;

            // Add the value to the score
            score += value;

            // Mark the current index and its adjacent indices
            marked.add(index);
            if (index - 1 >= 0) marked.add(index - 1);
            if (index + 1 < n) marked.add(index + 1);
        }

        return score;
    }
}