// Constructor function to create ArrayWrapper instances
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

// The `valueOf` method returns the sum of the elements of the array
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0);
};

// The `toString` method returns a comma-separated string of the array in square brackets
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
};

// Example usage:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);  // Output: 10
console.log(String(obj1)); // Output: "[1,2]"
console.log(String(obj2)); // Output: "[3,4]"
