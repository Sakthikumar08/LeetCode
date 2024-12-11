/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        let hasRejected = false;

        functions.forEach((fn, index) => {
            fn()
                .then(value => {
                    if (hasRejected) return;
                    results[index] = value;
                    completed += 1;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    if (!hasRejected) {
                        hasRejected = true;
                        reject(error);
                    }
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
