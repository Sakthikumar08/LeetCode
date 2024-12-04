function canMakeSubsequence(str1, str2) {
    const n = str1.length, m = str2.length;

    let i = 0, j = 0;

    while (i < n && j < m) {
        // Check if str1[i] matches str2[j] after at most one increment
        const c1 = str1[i].charCodeAt(0);
        const c2 = str2[j].charCodeAt(0);

        if (c1 === c2 || ((c1 + 1) % 26 === c2 % 26)) {
            j++; // Match found, move to the next character in str2
        }
        i++; // Move to the next character in str1
    }

    // If all characters in str2 are matched, return true
    return j === m;
}

// Example Usage
console.log(canMakeSubsequence("abc", "ad")); // Output: true
console.log(canMakeSubsequence("zc", "ad"));  // Output: true
console.log(canMakeSubsequence("ab", "d"));   // Output: false
