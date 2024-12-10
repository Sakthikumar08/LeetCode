/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId; // Keeps track of the current timeout

    return function(...args) {
        // Clear the previous timeout to cancel the previous execution
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        // Schedule the function to be called after t milliseconds
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * Example usage:
 * 
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
