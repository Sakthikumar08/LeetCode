/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    let timeoutId; // To store the ID of the scheduled timeout
    let isCancelled = false; // Flag to track if the function has been cancelled

    // Schedule the execution of `fn`
    timeoutId = setTimeout(() => {
        if (!isCancelled) {
            const result = fn(...args); // Call `fn` with the provided arguments
            console.log(`{"time": ${t}, "returned": ${result}}`);
        }
    }, t);

    // Return the cancel function
    return () => {
        isCancelled = true; // Mark as cancelled
        clearTimeout(timeoutId); // Clear the scheduled timeout
    };
}
const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelTimeMs1 = 50;

const cancelFn1 = cancellable(fn1, args1, t1);
setTimeout(cancelFn1, cancelTimeMs1); // Output: {"time": 20, "returned": 10}

const fn2 = (x) => x ** 2;
const args2 = [2];
const t2 = 100;
const cancelTimeMs2 = 50;

const cancelFn2 = cancellable(fn2, args2, t2);
setTimeout(cancelFn2, cancelTimeMs2); // Output: []

const fn3 = (x1, x2) => x1 * x2;
const args3 = [2, 4];
const t3 = 30;
const cancelTimeMs3 = 100;

const cancelFn3 = cancellable(fn3, args3, t3);
setTimeout(cancelFn3, cancelTimeMs3); // Output: {"time": 30, "returned": 8}



/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */