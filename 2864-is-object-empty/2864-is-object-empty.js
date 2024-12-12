/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if the input is an object (not null) and has no keys
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).length === 0;
    }

    // Check if the input is an array and has no elements
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // Return false for other cases (although inputs are guaranteed to be valid JSON objects or arrays)
    return false;
};
