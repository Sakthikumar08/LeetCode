class Solution {

    public int maxChunksToSorted(int[] arr) {
        int n = arr.length;
        int[] prefixMax = arr.clone();
        int[] suffixMin = arr.clone();

        // Fill the prefixMax array
        for (int i = 1; i < n; i++) {
            prefixMax[i] = Math.max(prefixMax[i - 1], prefixMax[i]);
        }

        // Fill the suffixMin array in reverse order
        for (int i = n - 2; i >= 0; i--) {
            suffixMin[i] = Math.min(suffixMin[i + 1], suffixMin[i]);
        }

        int chunks = 0;
        for (int i = 0; i < n; i++) {
            // A new chunk can be created
            if (i == 0 || suffixMin[i] > prefixMax[i - 1]) {
                chunks++;
            }
        }

        return chunks;
    }
}