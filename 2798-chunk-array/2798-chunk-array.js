/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

// Examples
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunk([1, 9, 6, 3, 2], 3)); // [[1, 9, 6], [3, 2]]
console.log(chunk([8, 5, 3, 2, 6], 6)); // [[8, 5, 3, 2, 6]]
console.log(chunk([], 1));              // []
