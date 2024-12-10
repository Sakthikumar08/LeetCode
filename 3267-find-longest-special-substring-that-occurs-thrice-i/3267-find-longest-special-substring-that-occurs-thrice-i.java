class Solution {
    public int maximumLength(String s) {
         int n = s.length();
        
        // Iterate over possible lengths of substrings, starting with the longest
        for (int len = n; len >= 1; len--) {
            Map<String, Integer> freqMap = new HashMap<>();
            
            // Generate all substrings of length len
            for (int i = 0; i <= n - len; i++) {
                String substring = s.substring(i, i + len);
                
                // Check if substring is "special" (all characters are the same)
                if (isSpecial(substring)) {
                    freqMap.put(substring, freqMap.getOrDefault(substring, 0) + 1);
                }
            }
            
            // Check if any special substring occurs at least 3 times
            for (int count : freqMap.values()) {
                if (count >= 3) {
                    return len;
                }
            }
        }
        
        return -1;
    }
    
    // Helper function to check if a string is "special"
    private boolean isSpecial(String str) {
        char firstChar = str.charAt(0);
        for (char c : str.toCharArray()) {
            if (c != firstChar) {
                return false;
            }
        }
        return true;
    }
}