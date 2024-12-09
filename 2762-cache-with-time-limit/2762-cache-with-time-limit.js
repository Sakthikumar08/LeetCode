class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // Map to store key-value pairs with expiration times
    }

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration Time until expiration in ms
     * @return {boolean} If an un-expired key already existed
     */
    set(key, value, duration) {
        const currentTime = Date.now();
        const isKeyPresent = this.cache.has(key);
        
        // Check if the key exists and is unexpired
        if (isKeyPresent && this.cache.get(key).expiryTime > currentTime) {
            // Overwrite the value and duration
            clearTimeout(this.cache.get(key).timeout); // Clear the old expiration timeout
        }
        
        const timeout = setTimeout(() => {
            this.cache.delete(key); // Delete the key when it expires
        }, duration);

        // Store the value and expiration info
        this.cache.set(key, { value, expiryTime: currentTime + duration, timeout });
        
        return isKeyPresent && this.cache.get(key).expiryTime > currentTime;
    }

    /**
     * @param {number} key
     * @return {number} Value associated with key
     */
    get(key) {
        const currentTime = Date.now();
        
        // Check if the key exists and is unexpired
        if (this.cache.has(key) && this.cache.get(key).expiryTime > currentTime) {
            return this.cache.get(key).value;
        }
        
        return -1; // Key is not present or expired
    }

    /**
     * @return {number} Count of non-expired keys
     */
    count() {
        const currentTime = Date.now();
        let count = 0;

        for (const [key, { expiryTime }] of this.cache.entries()) {
            if (expiryTime > currentTime) {
                count++;
            }
        }

        return count;
    }
}

// Usage example:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
