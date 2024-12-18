class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize the result with the given value
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value; // Add the given value to the result
        return this; // Return the current instance to enable method chaining
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value; // Subtract the given value from the result
        return this; // Return the current instance
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value; // Multiply the result by the given value
        return this; // Return the current instance
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed"); // Handle division by zero
        }
        this.result /= value; // Divide the result by the given value
        return this; // Return the current instance
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value); // Raise the result to the power of the given value
        return this; // Return the current instance
    }

    /**
     * @return {number}
     */
    getResult() {
        return parseFloat(this.result.toFixed(5)); // Return the result rounded to 5 decimal places
    }
}
