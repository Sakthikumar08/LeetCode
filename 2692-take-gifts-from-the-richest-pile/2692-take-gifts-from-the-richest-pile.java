class Solution {
    public long pickGifts(int[] gifts, int k) {
        // Use a PriorityQueue to keep track of the largest piles
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        // Add all piles into the maxHeap
        for (int gift : gifts) {
            maxHeap.add(gift);
        }

        // Perform k operations
        for (int i = 0; i < k; i++) {
            if (!maxHeap.isEmpty()) {
                // Extract the largest pile
                int largest = maxHeap.poll();
                // Calculate the remaining gifts after taking the square root
                int remaining = (int) Math.floor(Math.sqrt(largest));
                // Add the remaining gifts back to the heap
                maxHeap.add(remaining);
            }
        }

        // Sum up all remaining gifts
        long totalGifts = 0;
        while (!maxHeap.isEmpty()) {
            totalGifts += maxHeap.poll();
        }

        return totalGifts;
    }
}
