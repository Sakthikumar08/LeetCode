function decrypt(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) {
        return result; // All elements are replaced with 0
    }

    const direction = k > 0 ? 1 : -1; // Determine the direction of summation
    const steps = Math.abs(k); // Number of steps to sum

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = 1; j <= steps; j++) {
            // Calculate circular index
            const idx = (i + direction * j + n) % n;
            sum += code[idx];
        }

        result[i] = sum;
    }

    return result;
}
