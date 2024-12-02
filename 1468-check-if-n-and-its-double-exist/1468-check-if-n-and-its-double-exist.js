function checkIfExist(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(2 * num) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

// Example usage
const arr1 = [10, 2, 5, 3];
const arr2 = [3, 1, 7, 11];

console.log(checkIfExist(arr1)); // Output: true
console.log(checkIfExist(arr2)); // Output: false
