function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = (...args) => {
        const key = fn.name === "sum" ? JSON.stringify(args) : args.join(",");
        if (cache.has(key)) {
            return cache.get(key);
        }
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

    memoizedFn.getCallCount = () => callCount;

    return memoizedFn;
}

// Function definitions
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Example usage
function example(fnName, actions, values) {
    let fn;
    if (fnName === "sum") fn = sum;
    if (fnName === "fib") fn = fib;
    if (fnName === "factorial") fn = factorial;

    const memoizedFn = memoize(fn);
    const output = [];

    for (let i = 0; i < actions.length; i++) {
        if (actions[i] === "call") {
            output.push(memoizedFn(...values[i]));
        } else if (actions[i] === "getCallCount") {
            output.push(memoizedFn.getCallCount());
        }
    }

    return output;
}

// Test cases
console.log(example("sum", ["call", "call", "getCallCount", "call", "getCallCount"], [[2, 2], [2, 2], [], [1, 2], []])); // [4, 4, 1, 3, 2]
console.log(example("factorial", ["call", "call", "call", "getCallCount", "call", "getCallCount"], [[2], [3], [2], [], [3], []])); // [2, 6, 2, 2, 6, 2]
console.log(example("fib", ["call", "getCallCount"], [[5], []])); // [8, 1]


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */