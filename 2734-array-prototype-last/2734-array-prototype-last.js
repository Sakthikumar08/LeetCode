Array.prototype.last = function() {
    // Check if the array is empty
    if (this.length === 0) {
        return -1;
    }
    // Return the last element of the array
    return this[this.length - 1];
};

// Example usage:
const arr1 = [null, {}, 3];
console.log(arr1.last()); // Output: 3

const arr2 = [];
console.log(arr2.last()); // Output: -1

const arr3 = [1, 2, 3];
console.log(arr3.last()); // Output: 3
