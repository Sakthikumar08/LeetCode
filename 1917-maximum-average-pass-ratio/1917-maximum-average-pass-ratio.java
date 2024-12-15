import java.util.PriorityQueue;

class Solution {
    public double maxAverageRatio(int[][] classes, int extraStudents) {
        // Create a max-heap where elements are sorted by the delta in pass ratio if an extra student is added
        PriorityQueue<double[]> maxHeap = new PriorityQueue<>((a, b) -> Double.compare(b[0], a[0]));
        
        // Calculate the initial delta for each class and add to the heap
        for (int[] c : classes) {
            int pass = c[0];
            int total = c[1];
            double delta = calculateDelta(pass, total);
            maxHeap.offer(new double[] { delta, pass, total });
        }
        
        // Assign extra students to the classes
        while (extraStudents > 0) {
            double[] top = maxHeap.poll();
            int pass = (int) top[1];
            int total = (int) top[2];
            
            // Add an extra student to the selected class
            pass++;
            total++;
            extraStudents--;
            
            // Recalculate the delta and reinsert into the heap
            double delta = calculateDelta(pass, total);
            maxHeap.offer(new double[] { delta, pass, total });
        }
        
        // Calculate the final average pass ratio
        double totalAverage = 0;
        while (!maxHeap.isEmpty()) {
            double[] top = maxHeap.poll();
            int pass = (int) top[1];
            int total = (int) top[2];
            totalAverage += (double) pass / total;
        }
        
        return totalAverage / classes.length;
    }
    
    // Function to calculate the delta in pass ratio when an extra student is added
    private double calculateDelta(int pass, int total) {
        double currentRatio = (double) pass / total;
        double newRatio = (double) (pass + 1) / (total + 1);
        return newRatio - currentRatio;
    }
}
