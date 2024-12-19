class EventEmitter {
    // Base constructor
    constructor() {
        this.callTable = {};
    }

    // @param {string} eventName ---START---
    // @param {Function} callback; @return {Object}
    subscribe(eventName, callback) {
        if(this.callTable[eventName])
            this.callTable[eventName].push(callback);
        else
            this.callTable[eventName] = [callback];

        return {
            unsubscribe: () => {
                this.callTable[eventName] = this.callTable[eventName].filter((fn) => fn != callback);        
            }
        };
    }
    
    // @param {Array} args; @return {Array}
    emit(eventName, args = []) {
        if(!this.callTable[eventName]){
            return [];
        }

        return this.callTable[eventName].map((fn) =>fn(...args));
    }
}