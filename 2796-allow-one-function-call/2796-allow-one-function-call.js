/**
 * Creates a function that can only be called once.
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let called = false;  // To keep track of whether the function was called
    let result;          // To store the result of the first call
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args); // Call the original function
            return result;
        }
        return undefined; // Return undefined for subsequent calls
    };
}

// Example usage:
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

// Test calls
console.log(onceFn(1, 2, 3)); // Output: 6
console.log(onceFn(2, 3, 6)); // Output: undefined
console.log(onceFn(4, 5, 6)); // Output: undefined


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
