class Solution {

    public int prefixCount(String[] words, String pref) {
        int count = 0;
        for (String word : words) {
            count += hasPrefix(word, pref);
        }
        return count;
    }

    // Returns 1 if str has pref as prefix, 0 otherwise
    private int hasPrefix(String str, String pref) {
        int itr;
        // Compare characters until we reach end of either string
        for (itr = 0; itr < str.length() && itr < pref.length(); itr++) {
            if (str.charAt(itr) != pref.charAt(itr)) {
                return 0; // Mismatch found
            }
        }

        // Check if we've matched entire prefix
        if (itr != pref.length()) {
            return 0; // str is shorter than pref
        }
        return 1;
    }
}