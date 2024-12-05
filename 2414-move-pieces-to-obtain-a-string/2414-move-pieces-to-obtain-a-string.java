class Solution {
    public boolean canChange(String start, String target) {
        // Remove underscores and compare the order of 'L' and 'R'
        if (!start.replace("_", "").equals(target.replace("_", ""))) {
            return false;
        }
        
        int n = start.length();
        int startIndex = 0, targetIndex = 0;

        // Check the positions of 'L' and 'R'
        while (startIndex < n || targetIndex < n) {
            // Skip underscores in start
            while (startIndex < n && start.charAt(startIndex) == '_') {
                startIndex++;
            }
            // Skip underscores in target
            while (targetIndex < n && target.charAt(targetIndex) == '_') {
                targetIndex++;
            }

            // If both pointers are within bounds
            if (startIndex < n && targetIndex < n) {
                char startChar = start.charAt(startIndex);
                char targetChar = target.charAt(targetIndex);
                
                // Ensure the characters match
                if (startChar != targetChar) {
                    return false;
                }
                
                // Check constraints for 'L' and 'R'
                if (startChar == 'L' && targetIndex > startIndex) {
                    return false; // 'L' can't move right
                }
                if (startChar == 'R' && targetIndex < startIndex) {
                    return false; // 'R' can't move left
                }
                
                // Move to the next character
                startIndex++;
                targetIndex++;
            }
        }
        
        return true;
    }
}
