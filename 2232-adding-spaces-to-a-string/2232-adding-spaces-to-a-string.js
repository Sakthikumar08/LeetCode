/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
function addSpaces(s, spaces) {
    let result = [];
    let spaceIndex = 0; // Pointer for spaces array
    let sIndex = 0;     // Pointer for string s
    
    while (sIndex < s.length) {
        // Check if the current index in s matches the next space position
        if (spaceIndex < spaces.length && sIndex === spaces[spaceIndex]) {
            result.push(' '); // Add a space
            spaceIndex++;     // Move to the next space index
        }
        result.push(s[sIndex]); // Add the current character
        sIndex++;               // Move to the next character
    }
    
    return result.join('');
}

// Example Usage:
console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15])); // Output: "Leetcode Helps Me Learn"
console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));       // Output: "i code in py thon"
console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));    // Output: " s p a c i n g"
